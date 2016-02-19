/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return Meteor.subscribe('allNotifications')
  }
});

// Filters

var filters = {

  myFilter: function () {
    // do something
    this.next();
  },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop();
    }
  }

}

Router.onBeforeAction(filters.myFilter, {only: ['items']});

// Routes

Router.map(function() {

  // Items

  this.route('items', {
    waitOn: function () {
      return Meteor.subscribe('allItems');
    },
    data: function () {
      return {
        items: Items.find()
      }
    }
  });

  this.route('item', {
    path: '/item/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleItem', this.params._id);
    },
    data: function () {
      return {
        item: Items.findOne(this.params._id)
      }
    }
  });


  // Pages
  this.route('homepage', {
    path: '/',
    waitOn: function () {
      return Meteor.subscribe('allJobs');
    },
    data: function () {
      return {
        jobs: Jobs.find()
      }
    }
  });

  this.route('content');


  //Jobs
  
  this.route('addjob',{
    path:"/jobs/add"
  });

  this.route('jobs', {
    waitOn: function () {
      return Meteor.subscribe('allJobs');
    },
    data: function () {
      return {
        jobs: Jobs.find()
      }
    }
  });

  this.route('job',{
    path:"/jobs/:_id",
    waitOn: function () {
      return Meteor.subscribe('singleJob', this.params._id);
    },
    data: function () {
      return {
        job: Jobs.findOne(this.params._id)
      }
    }
  });

  // Users

  this.route('login');

  this.route('signup');

  this.route('forgot');

});
