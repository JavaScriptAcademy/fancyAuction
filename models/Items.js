ItemSchema = new SimpleSchema({
  name: { type: String },
  initPrice: { type: Number },
  description: { type: String },
  estimatePriceFrom: { type: Number },
  estimatePriceTo: { type: Number }
});

Items = new Mongo.Collection('Items');

Items.attachSchema(ItemSchema);