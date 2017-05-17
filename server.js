var express = require("express");
var path = require("path");
var ejs = require('ejs');
var bodyParser = require("body-parser");
var logger = require("morgan");
var app = express();

//data
var artists = [{name:"Jonathan the Great"}, {name: "The Guild"}];
//var artists = ["Jonathan the Great", "The Guild", "Coders", "The Beatles"];
var albums = ["an album", "another one"];
var songs = ["a song", "song 2"];


app.set('view engine', 'ejs')
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/views/index.html"));
// })

app.get('/', function(req, res) {
    res.render('index.ejs', {
      artists: artists
    });
});
app.get('/album', function(req, res) {
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

//q's  -- where should this error catcher be? When do these errors occur? Does that change when I say err.status || 500?
//q: err, req, res, next
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(err.status || 500).send("Something's wrong! Sorry about that." + err)
})

app.use(function(req, res) {
  res.status(404).send("404")
});

app.listen(8081);
console.log("I'm listening! Port 8081");
