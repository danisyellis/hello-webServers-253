var express = require("express");
var path = require("path");
var ejs = require('ejs')

var app = express();
app.set('view engine', 'ejs')

app.use(function(err, req, res, next) {
  console.err(err.stack);
  res.status(500).send("Something's wrong! Sorry about that.")
})

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/views/index.html"));
// })

app.get('/', function(req, res) {
    res.render('index.ejs');
});
app.get('/album', function(req, res) {
    res.render('album.ejs');
});
app.get('/albums', function(req, res) {
    res.render('albums.ejs');
});
app.get('/artist', function(req, res) {
    res.render('artist.ejs');
});

app.use(function(req, res) {
  res.status(404).send("404")
});

app.listen(8081);
console.log("I'm listening! Port 8081");
