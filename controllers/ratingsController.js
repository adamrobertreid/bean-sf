var db = require('../models');


function create(req, res) {
  db.Stores.findById(req.params.storeId, function(err, stores) {
    console.log('here is create modal vote error',err);
    console.log('foundstore', stores);
    for(var i = 0; i < stores.ratings.length; i++){
      var email = stores.ratings[i].userEmail;
      console.log('req.body..',req.body);
      console.log('from req', req.params.userEmail);
      console.log('just req', req.params);
      console.log('this will be what we want',email);
      if (email === req.body.userEmail){
        res.send(500, { message:"user has already rated this store"});
        return;
      }
    }
    var newRating = new db.Ratings(req.body);
      stores.ratings.push(newRating);

      stores.save(function(err, savedRating) {
        if (err) {
          res.send(500, { error: 'Saving rating and user failed!' });
        } else {
          res.json({ success: 'Saved!' });
        }
      });
    });
  }


// export public methods here
module.exports = {create: create};
