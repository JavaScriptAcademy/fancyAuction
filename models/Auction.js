import { ItemSchema } from './Items.js'

Auctions = new Mongo.Collection('Auctions');

AuctionsSchema = new SimpleSchema({
  // item: { type: Collection.Items },
  item: { type: ItemSchema },
  bidPrices: { type: [Object] },
  bidders: {type: [Object]}
});

Auctions.attachSchema(AuctionsSchema);