var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var ListingView = require('./modelView');
var MovieListing = require('./model');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function () {
    var self = this;
    var movieCollection = new MovieCollection();
    movieCollection.fetch().then(function (data) {
      console.log("these are the movies: ", movieCollection
    );
      var collectionView = new CollectionView({collection: movieCollection});
      // self.$el.find('section').html()

      self.$el.find('#createMovie').html(formHTML.render().el);
      self.$el.find('.content').html(formHTML.render().el);
      self.$el.find('#updatePost').html(formHTML.render().el);
      self.$el.find('#postTmpl').html(formHTML.render().el);

    });


  }

});
