Template.header.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  }
})

Template.header.events({
  'click .log-out': function () {
    Meteor.logout();
  }
})

Template.notifications.helpers({
  notifications: function() {
    return Notifications.find({userId: Meteor.userId()});
  },
  notificationCount: function(){
    return Notifications.find({userId: Meteor.userId(), read:false}).count();
  }
});

Template.notifications.events({
  "click #notificationsDropdown": function(e){
    Meteor.call("updateNotificationsState", function(e, r){
      if (e) {
        console.log(e);
      }
    })
  }
})