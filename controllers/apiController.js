var db = require('../models');

function index(req, res) {
  res.json({
    message: "Welcome to Bean!",
    documentation_url: "https://github.com/adamrobertreid/project_01/blob/master/README.md",
    base_url: "https://infinite-basin-75704.herokuapp.com/",
    endpoints: [
      {method: "GET",    path: "/api", description: "Describes available endpoints"},
      {method: "GET",    path: "/api/stores", description: "all coffee stores are here"},
      {method: "GET",    path: "/api/stores/storesId", description:"get store by its ID"},
      {method: "POST",   path: "/api/stores", description: "adding a whole new store to db"},
      {method: "POST",   path: "/api/stores/:storeId/ratings", description: "add rating via email in modal"},
      {method: "DELETE", path: "/api/stores/:storeId", description:"delete store fom the database"},
      {method: "UPDATE", path: "/api/stores/:storeId", description:"update details within an existing store"}
    ]
  });
}

module.exports.index = index;
