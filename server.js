// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// serve static files from public folder


app.use(bodyParser.urlencoded({ extended: true }));
// parse incoming urlencoded form data
// and populate the req.body object


// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use(express.static(__dirname + '/public'));


///////////////////////////////////////////////////////
//Variable to require controllers in JSON API Endpoints
/////////////////////////////////////////////////////////
var controllers = require('./controllers');

/*////////////////
 * DATABASE *
 */////////////

var db = require('./models');

/*/////////////
 *** ROUTES ***
 */////////////

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*///////////////////
* HTML Endpoints
*///////////////////
//connects server to index.html sending that file through server via
//nodemon and mongod.
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*//////////////////
* JSON API Endpoints
*//////////////////
app.get('/api', controllers.api.index);

app.get('/api/stores', controllers.stores.index);

app.get('/api/stores/:storeId', controllers.stores.show);

app.post('/api/stores', controllers.stores.create);

app.post('/api/stores/:storeId/ratings', controllers.ratings.create);

app.delete('/api/stores/:storeId', controllers.stores.destroy);

// app.put('/api/stores/:storeId', controllers.stores.update);



/*//////////////////
* SERVER *
*//////////////////
// listen on port 3000
 app.listen(process.env.PORT || 3000);
