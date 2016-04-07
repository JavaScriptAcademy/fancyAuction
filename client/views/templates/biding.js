Template.biding.helpers({
  bidPrices: function(){
    var auction = Auctions.findOne({ itemId: this._id });
    console.log(auction.bidPrices.length);
    if(auction.bidPrices.length <= 4){
      return auction.bidPrices;
    }else{
      prices = auction.bidPrices.slice(auction.bidPrices.length-4,auction.bidPrices.length);
      return prices;
    }
  }
});


Template.biding.events({
  'submit form': function(e){
    e.preventDefault();
    var bidItem = {
      itemId: this._id,
      bidPrice:{
        price: $(e.target).find('[name=price]').val(),
       /* constomerId: Meteor.user()._id,
        comstomerName: Meteor.user().name,*/
        submitted: new Date()
      }
    };

    Meteor.call('bidInsert', bidItem, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        // $body.val('');
        $(e.target).find('[name=price]').val('');
      }
    });
  }
});