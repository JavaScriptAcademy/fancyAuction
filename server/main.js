import { Meteor } from 'meteor/meteor';


function loadItem(){
  var items = [
  {
    name: 'PAIR OF SANDWICH GLASS COMPANY CUT OVERLAY PUNTY GLASS COLOGNE BOTTLES',
    initPrice: 200,
    image: 'http://51ci.com/uploadfile/2012/0808/20120808111428330.jpg',
    description: 'PAIR OF SANDWICH GLASS COMPANY CUT OVERLAY PUNTY GLASS COLOGNE BOTTLES Mid-19th Century',
    estimatePriceFrom: 400,
    estimatePriceTo: 2000
  },
  {
    name: 'THREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Two in Loop',
    initPrice: 500,
    image: 'http://img.china.alibaba.com/news/upload/5000180/news/2007/8/20/1/17_1187604961312.jpg',
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
  console.log(Items.findOne()._id);
});
