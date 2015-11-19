var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var FormView = require('./formView');
var ListingView = require('./modelView');
var MovieListing = require('./model');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  el: '#postTmpl',
  initialize: function () {
    var self = this;
    var movieListing = new MovieListing();
    movieListing.fetch().then(function () {
      var listingView = new ListingView({model: movie});
      // self.$el.find('section').html()

      self.$el.find('#createMovie').html(formHTML.render().el);
      self.$el.find('.content').html(formHTML.render().el);
      self.$el.find('#updatePost').html(formHTML.render().el);
      self.$el.find('#postTmpl').html(formHTML.render().el);

    });


  }

});
