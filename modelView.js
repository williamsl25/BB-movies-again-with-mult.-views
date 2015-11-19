//Model View for MovieListing only concerned with one model (from the template)
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieListing = require('./model');
var tmpl = require('./templates');
// var ListingView = require('./modelView');

module.exports = Backbone.View.extend({
  // template: _.template($('#postTmpl').html()),
  template: _.template('tmpl.movie'),
  tagName: 'article',
  className: 'col-md-4',

  events: {
    "click #deletePost": "removeListing",
    'click #editPost': 'showEdit',
    'click #submitEdit': 'editListing'
  },

  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
// this refers to the entire constructor. el is tagName, className we are grabbing the value of the this - .toJSON turns it into data
    return this;
  },
  // model of movie does not exist yet - it will exist when you create a new instance of the model in the addOneListing in collectionView.js

  showEdit: function() {
    this.$el.find('#editPost').hide();
    this.$el.find('#submitEdit').addClass('show');
    this.$el.find('#updatePost').addClass('show');
    this.$el.find('.content').hide();
  },

  removeListing: function() {
    this.model.destroy();
    this.$el.remove();
  },

  editListing: function(e) {
    e.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="editTitle"]').val(),
      director: this.$el.find('input[name="editDirector"]').val(),
      synopsis: this.$el.find('textarea[name="editSynopsis"]').val(),
      poster: this.$el.find('input[name="editPoster"]').val()
    })

    this.model.save();

    $('.content').show();
    $('#editPost').show();
    $('#updatePost').removeClass('show');
    $('#submitEdit').removeClass('show');
    console.log('submit edit button clicked');
// from template in head
  },

  initialize: function () {
    console.log(this.el);
  },
});
