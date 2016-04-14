var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Ratings = require('./ratings.js');


//models/stores.js
var StoresSchema = new Schema({
  image: String,
  name: String,
  address:  {
        type: String,
        trim: true,
        default: ''
    },
  city: {
        type: String,
        trim: true,
        default: ''
    },
    state: {
          type: String,
          trim: true,
          default: ''
      },
  zipcode: Number,
  rating: Number,
  ratings: [Ratings.schema]
});


var Stores = mongoose.model('Stores', StoresSchema);

module.exports = Stores;
