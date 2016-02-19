Notifications = new Meteor.Collection('notifications');

Meteor.methods({
  updateNotificationsState: function(){
    Notifications.update({userId: Meteor.userId()},{$set:{read:true}});
    return true;
  }
})