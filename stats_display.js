/*** from https://www.freecodecamp.org/news/how-to-make-your-first-javascript-chart/
<scriptsrc="https://code.jscharting.com/2.9.0/jscharting.js"></script>
<script src="js/index.js"></script>

<body>
  <div id="chartDiv" style="width:50%; height:300px; margin:0 auto;"></div>
</body>

//read in csv file then convert to json
//it is NOT correct rn
JSC.fetch("./sample_data_2.csv")
  .then(response => response.text())
  .then(text => { let myData = JSC.csv2Json("day,risk,magnitude,probability,x,y,zipcode\n1,3,low,high,1,1,10000",{
  columns: ["day", "risk", "magnitutde", "probability", "x", "y", "zipcode"]
}
});




var chart = JSC.chart("chartDiv", {
  type: "heatmap solid",
  margin_right: 15,
  title_label_text: "Heatmap Data",
  defaultSeries: {
    // Padding between cells
    shape_innerPadding: 0.01
  },
  defaultPoint_outline_color: "none",
  xAxis_label_text: "Longitude",
  yAxis_label_text: "Latitude",
  zAxis_label_text: "Heat Delta",
  palette: {
    /*Using a function instead of token like '%zValue' improves performance.*/
    pointValue: function (p) {
      return p.options("z");
    },
    colors: [
      "#1d92fb",
      "#e8fb1d",
      "#fbd51d",
      "#db1503"
    ]
  },
  series: [
    {
      points: generateData(10, 3)
    }
  ]
});

//generates a head map grid
function generateData(xCount, yCount) {
    var points = [];
    for(var i = 0; i<yCount; i++){
      myTemp = [];
      for(var j = 0; j<xCount; j++){
        //change val to read in from the csv values
      var val = Math.random()*5;
      points.push({
        x: j,
        y: i,
        z: val,
        attributes: {val: val}
      });
        
    }
  }
  return points;
}
***/
