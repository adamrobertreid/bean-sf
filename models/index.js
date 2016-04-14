var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                      "mongodb://localhost/project_01");

// update once file is created
module.exports.Stores = require('./stores.js');
module.exports.Ratings = require('./ratings.js');
