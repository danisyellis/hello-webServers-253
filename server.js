var express = require("express");
var path = require("path");
var ejs = require('ejs')

var app = express();
app.set('view engine', 'ejs')

app.use(function(err, req, res, next) {
  console.err(err.stack);
  res.status(500).send("Something's wrong! Sorry about that.")
})

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
})

app.use(function(req, res) {
  res.status(404).send("404")
})

// app.get('/', function(req, res) {
//     res.render('views/index.ejs');
// });
// app.get('/album', function(req, res) {
//     res.render('views/album.ejs');
// });
// app.get('/albums', function(req, res) {
//     res.render('views/albums.ejs');
// });
// app.get('/artist', function(req, res) {
//     res.render('views/artist.ejs');
// });

app.listen(8081);
console.log("I'm listening! Port 8081");
