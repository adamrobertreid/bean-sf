console.log("Sanity Check: JS is working!");

///Stores new store infromation into an,
///array before push to database!
var storeData = [];
var allStores = [];


$(document).ready(function() {
  console.log('app.js loaded!');

  //////////////////////////////////////////////////////////////////
  //////UPDATE EXISTING STORE
  /////////////////////////////////////////////////////////////////

  $('#shops-list').on('click', '.update-store', function(e) {
    console.log('.update-store clicked!');
    var id= $(this).closest('.store').data('store-id');
    console.log('this is the id of closest store',id);
    $('#updateModal').data('store-id', id);
    $('#updateModal').modal();
  });

  //////////////////////////////////////////////////////////////////
  //////HANDLEBARS COMPILER
  /////////////////////////////////////////////////////////////////

  //gets html source stores-template
  var templateHtml = $('#stores-template').html();
  //makes variable for handlebars and gives location in html
  var templateStores = Handlebars.compile(templateHtml);
  //this gives db information to DOM

  //////////////////////////////////////////////////////////////////
  //////GET STORES FROM DATABASE
  /////////////////////////////////////////////////////////////////

/*--- ajax GET's store information from db---*/
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

//////////////////////////////////////////////////////////////////
//////POST NEW STORES TO DATABASE FROM INPUTS
/////////////////////////////////////////////////////////////////
$('#shop-entry').on('submit', function(e) {
e.preventDefault();

$.ajax({
  method: 'POST',
  url: '/api/stores',
  data: $(this).serializeArray(),
  success: postNewSuccess,
  error: postError
 });
$(this).trigger("reset");
});
/*---Grabs new store inputs and pushes it to storeData array*/
 function postNewSuccess(json){
   console.log('post new shop data', json);
   storeData.push(json);
   storeSuccess(storeData);
   console.log('this is store data',storeData);


 }
 function postError(err){
   alert(err.responseJSON.message);
   $(this).trigger("reset");
   console.log('We have an error on', err);
 }


 //////////////////////////////////////////////////////////////////
 //////SUBMIT NEW RATING VIA EMAIL IN MODAL
 /////////////////////////////////////////////////////////////////
 $('#shops-list').on('click', '.add-rating', function(e) {
     console.log('.add-rating clicked!');
     var id= $(this).closest('.store').data('store-id');
     console.log('this is the id of closest store',id);
     $('#storeModal').data('store-id', id);
     $('#storeModal').modal();
 });

 $('#saveRating').on('click',function handleNewRatingSubmit(e) {
     e.preventDefault();
     var vote = $('#storeModal').find('#ratingVote');
     var userEmail = $('#storeModal').find('#userEmail');

   var dataToPost = {
     vote: vote.val(),
     userEmail: userEmail.val()
   };

   var storeId = $('#storeModal').data('storeId');
     console.log('retrieved rating:', vote, ' and userEmail:', userEmail, ' for store w/ id: ', storeId);

   //
   $.ajax({
     method: 'POST',
     url: '/api/stores/' + storeId + '/ratings',
     data: dataToPost,
     success: newPostSuccess,
     error: newPostError
   });

  function newPostSuccess(json){
    if(json === true){
      alert(err.responseJSON.message);
    }
    console.log('newPost', json);
    var storesUrl = '/api/stores/' + storeId;
    console.log('storesurl',storesUrl);

    $.ajax({
      method: 'GET',
      url: storesUrl,
      success: ratingSuccess,
      error: newVoteError
    });
  }
  function newPostError(err){
    alert("please enter a real email address!");
    console.log('new post error', err);
  }
   vote.val('');
   userEmail.val('');
   $('#storeModal').modal('hide');

   function ratingSuccess(data){
    //  $('[data-store-id=' + storeId + ']').remove();

     console.log('this data is working', data);
   }
   function newVoteError(err) {
     console.log( 'new vote error',err);
   }
 });

 //////////////////////////////////////////////////////////////////
 //////HANDLE STORE DELETE
 /////////////////////////////////////////////////////////////////

$('#shops-list').on('click', '.delete-store', deleteStoreHandle);

 function deleteStoreHandle(event) {
   var storeId = $(this).closest('.store').data('store-id');
   console.log('Someone just tried to deleted store id=' + storeId );
   $.ajax({
     url: '/api/stores/' + storeId,
     method: 'DELETE',
     success: storeDeleteSuccess
   });
 }

 function storeDeleteSuccess(json) {
   console.log('here is json delete',json);
   var deletedStore = json._id;
   console.log('removing the STORE from the page:', deletedStore);
    $('div[data-store-id=' + deletedStore + ']').remove();
 }







 //////////////////////////////////////////////////////////////////
 //////GOOGLE MAPS & GEOGUESSER
 /////////////////////////////////////////////////////////////////
 var sanFranMap = { lat: 37.78, lng: -122.44};

 function initialize() {
 var mapProp = {
 center:sanFranMap,
 zoom:12,
 scrollwheel:false,
 draggable:false,
 mapTypeId:google.maps.MapTypeId.ROADMAP
 };

 var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

 var marker = new google.maps.Marker({
 position:sanFranMap,
 });

 marker.setMap(map);
 }

 google.maps.event.addDomListener(window, 'load', initialize);



 }); /*<<--End of Document ready*//////////////////////
