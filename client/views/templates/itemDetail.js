Template.itemDetail.helpers({
  item : function(){
    var item = Items.findOne({ _id:this.itemId });
    return item;
  }
});