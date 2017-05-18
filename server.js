var express = require("express");
var path = require("path");
var ejs = require('ejs');
var bodyParser = require("body-parser");
var logger = require("morgan");
var app = express();

//data to use in ejs templates
var artists = require("./public/jsonData/artists.json");
var albums = require("./public/jsonData/albums.json")
var songs = require("./public/jsonData/songs.json")
var albumsForArtist = function(artistId) {
  var albumArr = [];
  artistId = parseInt(artistId);
  for(var i=0; i<albums.length; i++) {
    if(artistId === albums[i].artist_id) {
      albumArr.push(albums[i])
    }
  }
  return albumArr;
}

//middleware
app.set('view engine', 'ejs')
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());


//routes
app.get('/', function(req, res) {
    res.render('index.ejs', {
      artists: artists
    });
});
app.get('/album/:id', function(req, res) {
    res.render('album.ejs', {
      id:req.params.id,
      albums: albums
    })
});
app.get('/albums', function(req, res) {
    res.render('albums.ejs', {
      albums: albums,
      artists: artists
    });
});
app.get('/artist/:id', function(req, res) {
    var id = req.params.id;
    var artistAlbums = albumsForArtist(id);
    res.render('artist.ejs', {
      artist: artists[id - 1]
    });
});
app.get('/songs', function(req, res) {
    res.render('songs.ejs', {
      songs: songs
    });
});

//error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).send("Something went wrong! Sorry about that. ")
})

app.use(function(req, res) {
  res.status(404).send("404")
});

//start the server
app.listen(8081);
console.log("I'm listening! Port 8081");


//note to self: this is how to route when not using view engine
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/views/index.html"));
// })
