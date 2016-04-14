var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//models/album.js
var RatingSchema = new Schema({
  vote: Number,
  userEmail: {
    type: String
},
});

console.log(Number);
var Ratings = mongoose.model('Ratings', RatingSchema);

module.exports = Ratings;
