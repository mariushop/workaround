Jobs = new Meteor.Collection('jobs');

Meteor.methods({
  addJob:function(job){
    var newJob = Jobs.insert(job);
    return newJob;
  },
  removeJob:function(job){
    var newJob = Jobs.remove({_id:job._id});
    return newJob;
  }
});