var express = require("express");
var path = require("path");
var ejs = require('ejs');
var bodyParser = require("body-parser");
var logger = require("morgan");
var app = express();

//data to use in ejs templates
var artists = [{name:"Jonathan the Great"}, {name: "The Guild"}];
var albums = ["an album", "another one"];
var songs = ["a song", "song 2"];
//var artists = require("./public/artists.json")


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
    res.render('album.ejs');
});
app.get('/albums', function(req, res) {
    res.render('albums.ejs', {
      albums: albums
    });
});
app.get('/artist', function(req, res) {
    res.render('artist.ejs');
});
app.get('/songs', function(req, res) {
    res.render('songs.ejs', {
      songs: songs
    });
});

//error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).send("Something's wrong! Sorry about that. " + err)
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
