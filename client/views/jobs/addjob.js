/* ---------------------------------------------------- +/

## Item ##

Code related to the addjob template

/+ ---------------------------------------------------- */

Template.addjob.onRendered(function() {
  //
});

Template.addjob.helpers({
  //
});

Template.addjob.events({

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