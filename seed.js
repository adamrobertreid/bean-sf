var db = require('./models');

var coffeeStores = [
 {
   image: "/images/store_1.png",
   name: "Réveille Coffee Co.",
   address: "4076 18th St",
   city: "San Francisco",
   state: "CA",
   zipcode: 94114,
   ratings: [{
     vote: 4,
     userEmail: "billy@mail.com",
   },
    {  vote: 4,
     userEmail: "sarah@mail.com",
   }]
 },
 {
   image: "/images/store_2.png",
   name: "Spike's Coffees & Tea",
   address: "4117 19th st",
   city: "San Francisco",
   state: "CA",
   zipcode: 94114,
   ratings: [{
     vote: 5,
     userEmail: "james@mail.com",
   },
    {  vote: 4,
     userEmail: "adam@mail.com",
   }]
 },
 {
   image: "/images/store_3.png",
   name: "Four Barrel Coffee",
   address: "375 Valencia St",
   city: "San Francisco",
   state: "CA",
   zipcode: 94103,
   ratings: [{
     vote: 5,
     userEmail: "tom@mail.com",
   },
    {  vote: 4,
     userEmail: "joel@mail.com",
   }]
 },
 {
   image: "/images/store_1.png",
   name: "Coffee Bar",
   address: "1890 Bryant St",
   city: "San Francisco",
   state: "CA",
   zipcode: 94110,
   ratings: [{
     vote: 5,
     userEmail: "fiona@mail.com",
   },
    { vote: 4,
     userEmail: "tony@mail.com",
   }],
 },
 {
   image: "/images/store_2.png",
   name: "Sightglass Coffee",
   address: "3014 20th St",
   city: "San Francisco",
   state: "CA",
   zipcode: 94110,
   ratings: [{
     vote: 5,
     userEmail: "sam@mail.com",
   },
    { vote: 4,
     userEmail: "frank@mail.com",
   }],
 },
  {
    image: "/images/store_3.png",
    name: "Ritual Coffee Roasters",
    address: "1026 Valencia St",
    city: "San Francisco",
    state: "CA",
    zipcode: 94110,
    ratings: [{
      vote: 5,
      userEmail: "phil@mail.com",
    },
     { vote: 1,
      userEmail: "bryan@mail.com",
    }],
  },
   {
     image: "/images/store_1.png",
     name: "Haus Coffee",
     address: "3086 24th St",
     city: "San Francisco",
     state: "CA",
     zipcode: 94110,
     ratings: [{
       vote: 5,
       userEmail: "mike@mail.com",
     },
      { vote: 1,
       userEmail: "andrew@mail.com",
     }],
   },
    {
      image: "/images/store_2.png",
      name: "Coffee Shop",
      address: "3139 Mission St",
      city: "San Francisco",
      state: "CA",
      zipcode: 94110,
      ratings: [{
        vote: 2,
        userEmail: "drumph@mail.com",
      },
       { vote: 1,
        userEmail: "pailen@mail.com",
      }],
    },
     {
       image: "images/store_3.png",
       name: "Farley's",
       address: "1315 18th St",
       city: "San Francisco",
       state: "CA",
       zipcode: 94107,
       ratings: [{
         vote: 5,
         userEmail: "obama@mail.com",
       },
        { vote: 1,
         userEmail: "michel@mail.com",
       }],
     },
      {
        image: "images/store_1.png",
        name: "Wicked Grounds",
        address: "289 8th St",
        city: "San Francisco",
        state: "CA",
        zipcode: 94103,
        ratings: [{
          vote: 3,
          userEmail: "tombrady@mail.com",
        },
         { vote: 5,
          userEmail: "sally@mail.com",
        }],
      },
       {
         image: "images/store_2.png",
         name: "Blue Bottle Coffee",
         address: "315 Linden St",
         city: "San Francisco",
         state: "CA",
         zipcode: 94102,
         ratings: [{
           vote: 4,
           userEmail: "wilbo@mail.com",
         },
          { vote: 3,
           userEmail: "travis@mail.com",
         }],
       },
        {
          image: "images/store_3.png",
          name: "Ritual Coffee Roasters",
          address: "432b Octavia St",
          city: "San Francisco",
          state: "CA",
          zipcode: 94102,
          ratings: [{
            vote: 4,
            userEmail: "justin@mail.com",
          },
           { vote: 3,
            userEmail: "nathan@mail.com",
          }],
        },
         {
           image: "images/store_1.png",
           name: "Contraband Coffee Bar",
           address: "1415 Larkin St",
           city: "San Francisco",
           state: "CA",
           zipcode: 94109,
           ratings: [{
             vote: 4,
             userEmail: "brianna@mail.com",
           },
            { vote: 3,
             userEmail: "cory@mail.com",
           }],
         },
          {
            image: "images/store_2.png",
            name: "Flywheel Coffee Roasters",
            address: "672 Stanyan St",
            city: "San Francisco",
            state: "CA",
            zipcode: 94117,
            ratings: [{
              vote: 4,
              userEmail: "jackie@mail.com",
            },
             { vote: 3,
              userEmail: "jono@mail.com",
            }],
          }
];


//removes coffee shop before loading to prevent accumilating.
 db.Stores.remove({}, function(err, stores) {
   console.log('removed all coffee shops');
 db.Stores.create(coffeeStores, function(err, stores){
   if (err){
     return console.log("Error:", err);
   }
   console.log("Coffee shop", stores);
   process.exit(); // we're all done! Exit the program.
    });

 });
