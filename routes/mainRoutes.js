Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',{
  name: 'home',
  data: function(){
    return {};
  }
});

Router.route('/items',{
  name: 'items',
  template: 'items',
  data: function(){
    return {items:Items.find({})};
  }
});

Router.route('/items/:_id',{
  name: 'itemDetail',
  template: 'itemDetail',
  data: function(){
    return { itemId:this.params._id };
  }
});

Router.route('/biding/:_id', {
  name: 'biding',
  data: function() {
    // return Items.findOne(this.params._id);
    return { itemId:this.params._id };
  }
});

Router.route('/cart',{
  name: 'cart',
  template: 'cart',
  data: function(){
    return {};
  }
});
