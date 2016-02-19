
Meteor.publish('allItems', function() {
  return Items.find();
});

Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});

Meteor.publish('allNotifications', function() {
  var userId = this.userId;
  return Notifications.find({userId: userId});
});

Meteor.publish('singleJob', function(id) {
  return Jobs.find(id);
});

Meteor.publish('allJobs', function() {
  return Jobs.find();
});

