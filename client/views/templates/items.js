Template.items.helpers({
  items: function(){
    var items = Items.find({});
    return items;
  }
});