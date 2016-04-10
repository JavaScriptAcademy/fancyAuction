Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',{
  name: 'home',
  data: function(){
    return {};
  }
});

/*Router.route('/items',{
  name: 'items',
  template: 'items',
  data: function(){
    return {};
  }
});*/

Router.route('/items/:_id',{
  name: 'items',
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

/*Router.route('/signinregister', {
  name: 'signinRegister',
  template: 'signinRegister'
});*/