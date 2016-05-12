
Router.configure({
    layoutTemplate: 'ApplicationLayout'
  });

  Router.route('/', function () {
    console.log("rendering root /");
    this.render("login", {to:"header"});
    this.render("welcome", {to:"main"});  
  });

  Router.route('/create', function () {
    console.log("rendering createPoll /create");
    this.render("createPoll", {to:"main"});  
  });

  Router.route('/view', function () {
    console.log("rendering viewPoll /view");
    this.render("viewPoll", {to:"main"});  
  });

Template.welcome.helpers({
  loggedIn:function() {
    user = Meteor.userId();
    return user;
  }
});

Template.viewPoll.helpers({
  
  polls: function() {
    return Polls.find();
  },
  


});

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});