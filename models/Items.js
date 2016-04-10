ItemSchema = new SimpleSchema({
  name: { type: String },
  image: { type: String },
  initPrice: { type: Number },
  description: { type: String },
  startTime:{ type: Date },
  endTime: { type: Date },
  estimatePriceFrom: { type: Number },
  estimatePriceTo: { type: Number }
});

Items = new Mongo.Collection('Items');

Items.attachSchema(ItemSchema);