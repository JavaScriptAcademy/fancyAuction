Template.bidgraph.helpers({
  historybids: function(){
    var auction = Auctions.findOne({ itemId: this.itemId });
    // console.log(Auctions.find({ itemId: this.itemId }).fetch());
    if(auction){
      return auction.bidPrices;
    }
  }
});

function simpleTestData(){
  var data = [{x:0,y:0},{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:4},{x:5,y:5}];
  return [{
    values: data,
    key: 'test',
    col: '#2ca02c'
  }];
}

Template.bidgraph.rendered = function() {
  var data = simpleTestData();
  var chart = nv.models.lineChart()
    .margin({left: 40})  //Adjust chart margins to give the x-axis some breathing room.
    .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
    .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
    .showYAxis(true)        //Show the y-axis
    .showXAxis(true)        //Show the x-axis
    .forceY([0,99999])
    ;

  nv.addGraph(function() {
    chart.xAxis.axisLabel('times');
    chart.yAxis.axisLabel('$');
    // d3.select('#chart svg').datum(data).call(chart);
    nv.utils.windowResize(function() { chart.update(); });
    return chart;
  });

  var id = this.data.itemId;
  this.autorun(function(){
    var auction = Auctions.find({ itemId: id }).fetch()[0];
    if(auction){
      console.log(auction.bidPrices);
      var bidXY = [];
      for(var i = 0; i < auction.bidPrices.length; i++){
        bidXY.push({ x:i+1, y:auction.bidPrices[i].price });chart
        console.log(auction.bidPrices[i].price);
      }

      var bidData = [{values: bidXY, key: 'Trendency', col: '#2ca02c'}]
      d3.select('#chart svg').datum(bidData).call(chart);
      chart.yDomain([0,auction.bidPrices[auction.bidPrices.length-1].price]);
      chart.update();
     }
  });

};





