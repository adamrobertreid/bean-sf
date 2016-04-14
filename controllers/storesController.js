var db = require('../models');

// GET /stores
function index(req, res) {
  db.Stores.find({}, function(err, stores){
    if(err){return console.log("index error:",err);}
    var json = JSON.parse(JSON.stringify(stores));
      json.forEach(averageStoreRating);
    res.json(json);
  });
}
function averageStoreRating(store){
  var totalVotes = 0;
  store.ratings.forEach(function(rating){
    totalVotes += rating.vote;
    console.log('rating vote', rating.vote);
    console.log('length of stores in array', store.ratings.length);
  });
  var  averageRating = totalVotes / store.ratings.length;
  store.rating = averageRating;
  console.log('Stores average rating', store.rating);

}





// create new coffee shop with form data (`req.body`)
function create(req, res) {
  db.Stores.find({}, function(err, foundStores) {
    var storeExists = false;
   foundStores.forEach( function(store){
     if(store.address === req.params.address){
       storeExists = true;
       console.log("address already exists in db, store",false);
     }
  });
  if(storeExists === true){

    res.send(500, { message: 'New store was not saved, there is already a store at that address!' });
    console.log("store already exists", storeExists);
}else{
      console.log('body',req.body);
      var newStore = new db.Stores({
        image: req.body.image,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        zipcode: req.body.zipcode
      });

      console.log('newStore', newStore);
      var ratingsAttr = new db.Ratings({vote: req.body.ratings, userEmail: req.body.email});
      newStore.ratings = [ratingsAttr];

      console.log('new stores added to ', newStore);
      // save new coffee shop in db
      newStore.save(function handleSavedStore(err, store) {
        if (err) {
          console.log("this is newStore error SContol",err);
          res.send(500, { message: 'New store not saved your email matches our records !' });
        } else {
          newStore.rating = newStore.ratings[0].vote;
          res.json(newStore);
          console.log('this is new store',newStore);
        }

      });
    }

  });

}



function show(req, res) {
  db.Stores.findById(req.params.storeId, function(err, foundStore) {
    if(err) { console.log('storesController.show error', err); }
    console.log('storesController.show responding with', foundStore);
    res.json(foundStore);
  });

}


function destroy(req, res) {
    db.Stores.findOneAndRemove({ _id: req.params.storeId }, function(err, foundStore){
      res.json(foundStore);
    });
  }


// function update(req, res) {
//   console.log('updating with store', req.body);
//     db.Stores.findById(req.params.storeId, function(err, foundStore) {
//       if(err) { console.log('storesController.update error', err); }
//       foundStore.name = req.body.name;
//       foundStore.address = req.body.address;
//       foundStore.city = req.body.city;
//       foundStore.state = req.body.state;
//       foundStore.zipcode = req.body.zipcode;
//       foundStore.save(function(err, savedStore) {
//         if(err) { console.log('saving altered store failed'); }
//         res.json(savedStore);
//       });
//     });
//
//   }
// }







// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy
};
