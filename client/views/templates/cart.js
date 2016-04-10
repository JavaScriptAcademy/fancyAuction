Template.cart.helpers({
  cartItems: function(){
    if(! Meteor.user()){
      alert("Please login");
      return;
    }
    var userId = Meteor.user
    // var items = Auction.find({});
  }
});