/* ---------------------------------------------------- +/

## Job ##

Code related to the addJob template

/+ ---------------------------------------------------- */
Template.addJob.onCreated(function(){
  GoogleMaps.load({
    libraries:'places'
  });
  GoogleMaps.ready('jobAddMap', function(map) {
    var input = (document.getElementById('location'));
    var autocomplete = new google.maps.places.Autocomplete(input);
    var geocoder = new google.maps.Geocoder();
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(46.0100555,24.255145),
      map: map.instance,
      draggable: true
    });
    autocomplete.bindTo('bounds', map.instance);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }
      marker.setPosition(place.geometry.location);
      if( place.geometry.viewport ){
        map.instance.fitBounds(place.geometry.viewport);
      } else {
        map.instance.setZoom(15);
        map.instance.setCenter(place.geometry.location);
      }
    });

    // update address on drag end
    google.maps.event.addListener(marker, 'dragend', function(evt){
      geocoder.geocode({ latLng: evt.latLng }, function(responses) {
        if (responses && responses.length > 0) {
          $(input).val(responses[0].formatted_address);
        } else {
          $(input).val('could not determine location')
        }
      });
    });
  });
});

Template.addJob.onRendered(function() {
});

Template.addJob.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(46.0100555,24.255145),
        zoom: 7
      };
    }
  }
});

Template.addJob.events({
  'submit #addJobForm': function(e, instance){
    e.preventDefault();
    var jobTitle = $("#jobtitle").val();
    var jobDescription = $("#jobDescription").val();
    var job = {
      title: jobTitle,
      description: jobDescription,
      addedAt: Date.now(),
      addedById: Meteor.userId()
    };
    Meteor.call('addJob', job, function(error, jobId){
      if (error) {
        console.log(error);
      }
      alert('Job added');
      Router.go('/jobs/'+jobId);
    });
  },
});
