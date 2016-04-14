# Project_01 Bean
#### What is this project?
In this project I will be building a full stack web application using jQuery and AJAX, Express, Node.js, Mongoose, and MongoDB.

The objective of this project is to:

Apply the skills I've learned by building a full-stack web application from the ground up.
Demonstrate mastery of topics covered during this course so far.
Build a polished, published website you can share in your portfolio.

##Title: Bean

######Webapp Intro
Bean is Yelp for coffee shops in the San Francisco area *(in version 1.0)* this app will collect users ratings out of five for a
paricular coffee store already in our database. We are not using external API's to access rating as we would like to build our own
API for ratings for each store. In this first release of the app our users can only make one review of each store. This is to stop users and store owners from favouring there favourite store and giving us a cleaner API of reviews.
I have an input feature that allows users to add a coffee shop to our database, in this process there is a validation check which looks
at the address of that particular store the user is entering. If this address already matches our records the user will be alerted that the store is already in the data base.

## CORE REQUIREMENTS
Make sure to do all of the following with your app.

* **Express API** Build an Express Application that has both HTML and JSON endpoints.
* **RESTful Routes** Design your CRUD routes using the [REST](http://restfulrouting.com/mappings/resources) convention.
* **AJAX** Leverage AJAX to fetch JSON data from the backend.
* **jQuery** Use jQuery to add interactivity and render data on the client-side.  
* **Templating** Render the JSON data on the frontend using handlebars templates.  
* **MongoDB** Persist at least two models to a Mongo Database. Use at least one one-to-many or many-to-many relationship between models. You can choose to reference or embed your data.  
* **Git** 50+ commits. Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed. (And don't expose any secret keys/tokens on GitHub!)
* **Code Style** Write professional-looking code. Follow the [Airbnb Javascript Styleguide](https://github.com/airbnb/javascript/tree/master/es5).
* **Visual Design** Use Twitter Bootstrap, Foundation, Skeleton, or another CSS framework to make your front-end snazzy. First impressions matter!
* **Heroku** Deploy your app to Heroku.
* **Documentation** Write a README.md that would make an employer excited to hire you. Screenshots are encouraged. See the [example readme](./example-readme.md) for a suggested structure.

##Triumphs
* Getting the code to do what i wanted
* being able to validate if the users store input was already in the database
* creating a visually pleasing project

##Challanges
* Debugging, it takes so much longer than you think
* having to meet all of CRUD when I dont want those features in app
* Being confindent enough to break things after they are made, it happened anyway

##Words of wisdom
* Do more planning before project even starts
* keep commenting code and making makers
* Try not to make typos

## Challanging Code snippits
1. rating average
```
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
```
2. Finding top ten stores
```
$.ajax({
  method: 'GET',
  url: '/api/stores',
  success: storeSuccess,
  error: storeError
});
/*--- function unpacks array and renderStore---*/
function storeSuccess(json){
  console.log('between 39 and 40',json);
  json.sort(compare);
  function compare(storeA, storeB){
    if(storeA.rating > storeB.rating){
      return -1;
    }
    if(storeA.rating <storeB.rating){
      return 1;
    }
    return 0;
  }
  console.log('order my stores',json);
  var topTen = json.slice(0, 12);
  console.log(topTen);
  //stroreData = topTen;
  var newStore = templateStores({stores: topTen});
  $('#shops-list').prepend(newStore);

}

function storeError(err){
  console.log('oh no!',err);

}
```

####Images created and used for project_01 header.
![alt tag](http://i.imgur.com/vep8sGk.jpg)

Created on Photoshop to div pixels W & H. Saved as .png and uploaded via imgur.


###LINKS
[Bean.co, Heroku LINK:](https://bean-co.herokuapp.com/)
[Bean.co, GitHub LINK:](https://github.com/adamrobertreid/project_01)
