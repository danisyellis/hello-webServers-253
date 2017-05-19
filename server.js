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
//functions to parse this data- linking data from the different files together

// var getalbumsForAllArtists = function(artistsArray) {
//   artists.forEach(artist, function() {
//
//   })
// }

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
var artistForAlbum = function(artistIdFromAlbum) {
  for(var i=0; i<artists.length; i++) {
    if(artistIdFromAlbum === artists[i].id) {
      return artists[i].name;
    }
  }
}

var songsForAlbum = function(albumId) {
  var songsArr = [];
  albumId = parseInt(albumId);
  for(var i=0; i<songs.length; i++) {
    if(albumId === songs[i].album_id) {
      songsArr.push(songs[i]);
    }
  }
  return songsArr;
}

//middleware
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());


//loop through

//routes
app.get('/', function(req, res) {
    res.render('index.ejs', {
      artists: artists
    });
});
app.get('/albums/:id', function(req, res) {
  //is the parseInt needed?/messing things up?
  var id=parseInt(req.params.id) -1;
  var songs= songsForAlbum(id+1)
  var songLength = songs.length;
  var artistIdFromAlbum = albums[id].artist_id;
  var artistName = artistForAlbum(artistIdFromAlbum)
    res.render('album.ejs', {
      id:id,
      albums: albums,
      songs: songs,
      artistName: artistName,
      artistId: artistIdFromAlbum,
      songLength: songLength
    })
});
app.get('/albums', function(req, res) {
  //call artistsForAlbum(albums)
  //after, get artist name and artist id
    res.render('albums.ejs', {
      albums: albums,
    });
});
app.get('/artists/:id', function(req, res) {
    var id = req.params.id;
    var artistAlbums = albumsForArtist(id);
    var numSongsForAlbums = [];
    for(var i=0; i<artistAlbums.length; i++) {
      numSongsForAlbums.push(songsForAlbum(artistAlbums[i].id).length)
    }
    res.render('artist.ejs', {
      artist: artists[id - 1],
      albums: artistAlbums,
      numSongsForAlbums: numSongsForAlbums
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
