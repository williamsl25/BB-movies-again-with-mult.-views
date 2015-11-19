var $ = require('jquery');
var CollectionView = require('./collectionView');
var MovieCollection =require('./collection');
var tmpl = require('./templates');

$(document).ready(function() {
  var movieCollection = new MovieCollection();
  movieCollection.fetch().then(function (data) {
    console.log("these are the movies: ", movieCollection
  );
    var collectionView = new CollectionView({collection: movieCollection});
  });
});
//.fetch will grab the collection from the server
//creates an instance of the movie collection
