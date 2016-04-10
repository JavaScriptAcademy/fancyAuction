import { Meteor } from 'meteor/meteor';


function loadItem(){
  var items = [
  {
    name: 'Babi with tower',
    initPrice: 200,
    image: 'http://i.ce.cn/fashion/news/201603/25/W020160325768422392188.jpg',
    description: 'PAIR OF SANDWICH GLASS COMPANY CUT OVERLAY PUNTY GLASS COLOGNE BOTTLES Mid-19th Century',
    estimatePriceFrom: 400,
    estimatePriceTo: 2000
  },
  {
    name: 'Big Eye Babi',
    initPrice: 500,
    image: 'http://img.china.alibaba.com/news/upload/5000180/news/2007/8/20/1/17_1187604961312.jpg',
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 1000,
    estimatePriceTo: 20000
  },
   {
    name: 'Wedding Babi',
    initPrice: 500,
    image: 'http://a0.att.hudong.com/41/37/01000000000000119093758562441.jpg',
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 1000,
    estimatePriceTo: 20000
  },
  {
    name: 'Princess Babi',
    initPrice: 500,
    image: 'http://img1.ph.126.net/zHVXymd1K7sBXHKquNmwXg==/6630609269350046389.jpg',
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 1000,
    estimatePriceTo: 20000
  },
  {
    name: 'Chinese Babi',
    initPrice: 500,
    image: 'http://p1.gexing.com/qqpifu/20120817/1121/502db89d4bafe.jpg',
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 1000,
    estimatePriceTo: 20000
  },
  {
    name: 'Babi with boyfriend',
    initPrice: 500,
    image: 'http://language.chinadaily.com.cn/bbc/ent/attachement/jpg/site1/20120220/0013729e41a910ac42ee39.jpg',
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 1000,
    estimatePriceTo: 20000
  },
   {
    name: 'Professional Babi',
    initPrice: 5000,
    image: 'http://i3.sinaimg.cn/gm/2015/0316/U12088P115DT20150316112455.jpeg',
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 10000,
    estimatePriceTo: 50000
  },
  {
    name: 'Black clothes Babi',
    initPrice: 5000,
    image: 'http://img102.mypsd.com.cn/20120906/1/Mypsd_22871_201209061719090088B.jpg',
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 10000,
    estimatePriceTo: 50000
  },
  {
    name: 'Red Babi',
    initPrice: 5000,
    image: 'http://tu.webps.cn/tb/img/4/TB1v8VWHXXXXXcAXVXXXXXXXXXX_%21%210-item_pic.jpg',
    description: 'HREE SANDWICH GLASS COMPANY BLOWN-MOLDED COLOGNE BOTTLES Mid-19th Century Two in Loop pattern and one in Star and Punty patterns, all in canary yellow. ',
    estimatePriceFrom: 10000,
    estimatePriceTo: 50000
  },
  ];
  Items.insert(items[0]);
  Items.insert(items[1]);
  Items.insert(items[2]);
  Items.insert(items[3]);
  Items.insert(items[4]);
  Items.insert(items[5]);
  Items.insert(items[6]);
  Items.insert(items[7]);
  Items.insert(items[8]);
}
Meteor.startup(() => {
  // code to run on server at startup
  console.log('Hello');
  if(Items.find().count() === 0){
    loadItem();
  }
  console.log(Items.findOne()._id);
});
