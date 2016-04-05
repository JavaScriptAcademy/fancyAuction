import { Meteor } from 'meteor/meteor';


function loadItem(){
  var items = [
  {
    name: 'PAIR OF SANDWICH GLASS COMPANY CUT OVERLAY PUNTY GLASS COLOGNE BOTTLES',
    initPrice: 200,
    description: 'PAIR OF SANDWICH GLASS COMPANY CUT OVERLAY PUNTY GLASS COLOGNE BOTTLES Mid-19th Century',
    estimatePriceFrom: 400,
    estimatePriceTo: 2000
  },
  {
    name: 'THREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Two in Loop',
    initPrice: 500,
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 1000,
    estimatePriceTo: 20000
  }
  ];
  Items.insert(items[0]);
  Items.insert(items[1]);
}
Meteor.startup(() => {
  // code to run on server at startup
  console.log('Hello');
  if(Items.find().count() === 0){
    loadItem();
  }
});
