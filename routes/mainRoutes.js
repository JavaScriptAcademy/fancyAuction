Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/biding/:_id', {
  name: 'biding',
  data: function() {
    // console.log(Items.findOne(this.params._id));
    return Items.findOne(this.params._id); }
});