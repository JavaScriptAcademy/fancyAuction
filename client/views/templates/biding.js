Template.biding.helpers({
  item: function(){
    return Items.findOne({_id: this.itemId});
  },
  bidPrices: function(){
    var auction = Auctions.findOne({ itemId: this.itemId });
    if(auction){
      if(auction.bidPrices.length <= 4){
      return auction.bidPrices;
    }else{
      prices = auction.bidPrices.slice(auction.bidPrices.length-4,auction.bidPrices.length);
      return prices;
    }
    }
  }
});


Template.biding.events({
  'submit form': function(e){
    e.preventDefault();
    var item = Items.findOne({ _id: this.itemId });
    var largestPrice = item.initPrice;
    var auction = Auctions.findOne({ itemId: this.itemId });
    if(auction !== undefined){
      largestPrice = auction.bidPrices[auction.bidPrices.length-1].price;
    }
    var newBidPrice = $(e.target).find('[name=price]').val();
    if( !isNum(newBidPrice) ){
      alert("You should put in a Integer!");
      $(e.target).find('[name=price]').val('');
    }else if( Number(newBidPrice) <= Number(largestPrice)){
      alert("Your biding price is lower than current largest price!");
      $(e.target).find('[name=price]').val('');
    }else{
      var bidItem = {
        itemId: this.itemId,
        bidPrice:{
          price: $(e.target).find('[name=price]').val(),
          customerId: Meteor.user()._id,
          customerName: Meteor.user().username,
          submitted: new Date()
        }
      }
      Meteor.call('bidInsert', bidItem, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $(e.target).find('[name=price]').val('');
      }
    });
    };
  }
});

function isNum(s){
  if(s!=null){
    var r,re;
    re = /\d*/i; //\d表示数字,*表示匹配多个数字
    r = s.match(re);
    return (r==s)?true:false;
  }
  return false;
}


