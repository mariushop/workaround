/* ---------------------------------------------------- +/

## Item ##

Code related to the job template

/+ ---------------------------------------------------- */

Template.job.created = function () {
  //
};

Template.job.helpers({
//

});

Template.job.rendered = function () {
  //
};

Template.job.events({
  'click .delete': function(e, instance){
    var job = this;
    e.preventDefault();
    Meteor.call('removeJob', job, function(error, result){
      alert('Job deleted.');
      Router.go('/jobs');
    });
  },

});