These are the basic specs for “Hello, Web Servers”, broken into 5 stages. If you complete these specs, try taking on some of the Stretch specs.

Stage 1

Setup the repo and file structure, install and configure Express, and get a basic server running.

[x]  Repo (your artifact) is created on GitHub
[x] Repo follows a conventional file structure for an Express.js app:
[x] package.json: standard for any Node.js app; includes package info and lists dependencies
[x] server.js: your Express server, with all routes defined
[x] views/: for storing your EJS HTML templates
[x] public/: for storing static files like CSS and images
[x] README.md: includes overview of your repo
[x] Express server can be started with $ node server.js
[x] Server renders a page at the root route (/)
[x] All package dependencies are defined in package.json
[x] The artifact produced is properly licensed, preferably with the MIT license

Stage 2

 Build out the routes and views for each page using the EJS templating    language. Add basic styles so that they follow the layouts defined in the wireframes. Add any additional styles you like to make it look nice :).

At this point, you don’t need to actually show any real data, just render HTML with placeholder text and images. You’ll render real data in stage 3.

[x] EJS is installed and set up for HTML templating
[x] View template files are created in the /views subdirectory
[x] Main view file is called views/index.ejs
[x] Main view is rendered at route /
[x] Main view shows a list of all artists (see wireframe)
[x] Albums view file is called views/albums.ejs
[x] Albums view is rendered at route /albums
[x] Albums view shows a list of all albums (see wireframe)
[x] Songs view file is called views/songs.ejs
[x] Songs view is rendered at route /songs
[x] Songs view shows a list of all songs (see wireframe)
[x] Individual artist view file is called views/artist.ejs
[x] Individual artist view is rendered at route /artists/:artist_id
[x] Individual artist view shows a list of the artist’s songs (see wireframe)
[x] Individual album view file is called views/album.ejs
[x] Individual album view is rendered at route /albums/:album_id
[x] Individual album view shows a list of the album’s songs (see wireframe)
[x] CSS is organized into one or more files in the public/ directory
[x] CSS declarations are well-named and formatted (consider using this small guide)

Stage 3

Integrate a “fake database” by rendering static data sets of artists, albums, and songs using server-side JS.

Use the fake data set provided.

[x] Main view (/) shows all artists from the fake artists data.
[x] Main view shows artist name and genre.
[x] Artist name on main view links to the artist view (/artists/:artist_id).
[x] Album list view (/albums) shows all albums from the fake album data.
[x] Album list view shows the name of the artist for each album.
[x] Album name on album list view links to the album view (/albums/:album_id).
[x] Artist name on album list view links to the artist view (/artists/:artist_id).
[x] Song list view (/songs) shows all songs from the fake song data.           
[]SOME Song list view shows song title, artist, album, and song length in seconds.
[x] Artist view (/artists/:artist_id) shows all albums for the artists with id :artist_id from the fake artist data. Hint: you can filter the albums by their artist_id property.
[x] Artist view shows artist name and genre.
[x] Artist view shows each album title and year released.
[x] Album names on artist view links to the album view (/albums/:album_id).
[x] Album view (/albums/:album_id) shows all albums from the fake album data. Hint: you can filter the songs by their album_id property.
[x] Album view shows album title, artist name, and year released.
[x] Album view each song title, its track number, and length in seconds.
[x] Artist name on album view links to the artist view (/artists/:artist_id).

Stage 4

Improve the views by adding summary data (e.g. song count for album), parsing the song length into minutes and seconds, showing actual album artwork and artist profile images, and integrating a CSS framework to make it prettier.

[x] Main view (/) shows an album count for each artist.
[x] Album list view (/albums) shows a song count for each album.
[x] Artist view (/artists/:artist_id) shows an album count for the artist.
[x] Artist view (/artists/:artist_id) shows a song count for each album.
[x] Album view (/albums/:album_id) shows a song count for the album.
[] On all views that show song length, the length is shown in mm:ss format. For example, if the song has a length of 286 seconds, then it would be shown as 04:46 (286 seconds = 4 minutes, 46 seconds).
[] Actual album images are used instead of placeholders on albums list (/albums), artist (/artists/:artist_id), and album (/albums/:album_id) views. Hint: once you find an image (Google image search is a good place for this), you can add the URL to the albums.json fake data file.
[] Actual artist profile images are used instead of placeholders on main view (/) and artist view (/artists/:artist_id). Hint: once you find an image (Google image search is a good place for this), you can add the URL to the artists.json fake data file.
[] App uses a CSS framework like Twitter bootstrap or Yahoo’s Pure.css.

Stage 5

Refactor and improve the organization of your code. Use EJS’s “includes” feature to better organize the different components of your views.

[x] All views use an include for the header nav (with links to “Artists”, “Albums” and “Songs”).
[x] Header nav include is kept in the file views/layout/header.ejs.
[] Main view (/) uses an artist list item include for each artist.
[] Artists list item include is kept in the file views/artists/list_item.ejs.
[] Albums list view (/albums) uses an album list item include for each album.
[] Albums list item include is kept in the file views/albums/list_item.ejs.
[] Songs list view (/songs) uses a song list item include for each song.
[] Songs list item include is kept in the file views/songs/list_item.ejs.
[] Artist view (/artists/:artist_id) uses an artist album include for each album.
[] Artist album include is kept in the file views/artists/album.ejs.
[] Album view (/albums/:album_id) uses an album song for each album.
[] Album song include is kept in the file views/albums/song.ejs.
