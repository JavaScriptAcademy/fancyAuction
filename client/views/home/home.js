Template.home.helpers({
  items: function(){
    var allItems = Items.find({}).fetch();
    var items = [];
    for(var i = 0; i < 6; i++){
      items.push(allItems[i]);
    }
    return items;
  }
});

/*Template.home.event({
  'submit form': function(e){
    e.preventDefault();
  }
});*/