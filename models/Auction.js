import { ItemSchema } from './Items.js'

Auctions = new Mongo.Collection('Auctions');

AuctionsSchema = new SimpleSchema({
  // item: { type: Collection.Items },
  itemId: { type: String },
  bidPrices: { type: [Object] },
});

// Auctions.attachSchema(AuctionsSchema);

Meteor.methods({
  bidInsert: function(bidItem){
    var item = bidItem.itemId;
    var auction = Auctions.findOne({ itemId: item });

    if(auction === undefined){
      bid = [];
      bid.push(bidItem.bidPrice);
      Auctions.insert({
        itemId: item,
        bidPrices: bid
      });
    }else{
      newBidPrices = auction.bidPrices;
      newBidPrices.push(bidItem.bidPrice);
      Auctions.update({itemId: item}, { $set: { bidPrices: newBidPrices }});
    }
  }
});