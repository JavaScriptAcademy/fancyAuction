Template.itemDetail.helpers({
  item : function(){
    var item = Items.findOne({ _id:this.itemId });
    item.startTime = item.startTime.toUTCString();
    item.endTime = item.endTime.toUTCString();
    return item;
  }
});