Template.items.helpers({
  items: function(){
    var items = Items.find({});
    for(var i = 0; i < items.length; i++){
      items[i].startTime = items[i].startTime.toUTCString();
      items[i].endTime = items[i].endTime.toUTCString();
    }
    return items;
  }
});