Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/',{
  name: 'home',
  data: function(){
    return {};
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