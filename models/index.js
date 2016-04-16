var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
                      "mongodb://localhost/project_01");

// update once file is created
module.exports.Stores = require('./stores.js');
module.exports.Ratings = require('./ratings.js');
