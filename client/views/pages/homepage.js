Template.homepage.onRendered(function() {
  GoogleMaps.load({
    libraries:'places'
  });
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});

Template.homepage.helpers({
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