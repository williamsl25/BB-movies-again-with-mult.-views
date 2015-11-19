module.exports = {

// id="postTmpl"
  movie: [
      "h2><%= title %></h2>",
      "<hr />",
      "<h3><%= director %></h3>",
      "<p><%= synopsis %></p>",
      "<img src='<%= poster %>' >",

  ].join(""),

  form: [
    "<form>",
      "<div>",
      "<label for='newTitle'>Movie Title</label>",
      "<input type='text' class='form-control' id='newTitle' name='newTitle' placeholder='Enter the Movie Title'>",
      "</div>",

      "<div>",
      "<label for='newDirector'>Director</label>",
      "<input type='text' class='form-control' id='newDirector' name='newDirector' placeholder='Director'>",
      "</div>",

      "<div>",
      "<label for='newSynopsis'>Movie Synopsis</label>",
      "<textarea class='form-control' rows='5' name='newSynopsis' id='newSynopsis' placeholder='Enter Movie Synopsis'></textarea>",
      "</div>",

      "<div>",
      "<label for='newPoster'>Upload Movie Image</label>",
      "<input type='url' id='newPoster' name='newPoster' placeholder='Input Image URL'>",
      "</div>",

      "<button type='submit' class='btn btn-default' id='submitListing'>Submit</button>",
    "</form>"
  ].join(""),
// <div class="form-group">
  updatePostForm: [
    "<form>",
      "<div>",
      "<p><label for='editTitle'>Movie Title</label></p>",
      "<p><input type='text' name='editTitle' value='<%= title %>' placeholder='Title'></p>",
      "</div>",
      "<div>",
      "<p><label for='editDirector'>Director</label></p>",
      "<p><input type='text' name='editDirector' value='<%= director %>' placeholder='Director'></p>",
      "</div>",
      "<div>",
      "<p><label for='editSynopsis'>Director</label></p>",
      "<p><textarea class='form-control' rows='5' name='editSynopsis' placeholder='Content'><%= synopsis %></textarea></p>",
      "</div>",
      "<div>",
      "<p><label for='editPoster'>Upload Movie Image</label></p>",
      "<p><input type='text' name='editPoster' value='<%= poster %>', placeholder='Image Url'></p>",
      "</div>",
      "<button class='btn btn-danger' id='deletePost'>Delete</button>",
      "<button class='btn btn-primary' id='editPost'>Edit Post</button>",
      "<button class='btn btn-default' id='submitEdit'>Submit</button>",
    "</form>"
  ].join(""),

};
