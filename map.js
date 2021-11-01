var testData = {
  max: 8,
  data: [{lat: 49.6408, lng:-86.7728, count: 3},{lat: 50.75, lng: -90.55, count: 1}, {lat: 49.6408, lng:-88.7728, count: 3},]
};
/*
const fs = require('fs');
const papa = require('papaparse');
const file = fs.createReadStream('./test_meters.csv');
var count = 0; // cache the running count
var data;
Papa.parse(file, {
    worker: true, // Don't bog down the main thread if its a big file
    /*step: function(result) {
        // do stuff with result
    },*/
    complete: function(results, file) {
        data = results;
        console.log("data");
    }
});
*/

var data;
Papa.parse('https://www.dropbox.com/s/z9urfgu6wkvc49a/test_meters.csv?dl=0', {
  header: true,
  dynamicTyping: true,
  complete: function(results) {
    data = results;
  }
});
console.log(data);

/*
$.get('./test_meters.csv', function(csvString) {
  var data = Papa.parse(csvString.trim()).data.filter(
    function(row) { return row.length === 4 }
  ).map(function(a) {
    return [ parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]) ]
  })
  })
*/
/*
$.get('https://drive.google.com/file/d/1uSPYZUPN4Z1FP4JwS-6zdGlGXvFU2Exw/view?usp=sharing', function(csvString) {
  var data = Papa.parse(csvString.trim()).data.filter(
    function(row) { return row.length === 4 }
  ).map(function(a) {
    return [ parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]) ]
  })
  })
*/

var imageUrl = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event_clear.png',
            imageBounds = [[51.2 + 2.0, -100.0 - 2.0], [35.0 - 2.0, -70.0 + 2.0]],
            imageOverlay = L.imageOverlay(imageUrl, imageBounds);
  

var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmRlYW4iLCJhIjoiY2t1eWl3dnA2NzNpNTJwbzNvcHRxejdxaCJ9.tIGjuwey9icme7TC-y-U9g', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoicmRlYW4iLCJhIjoiY2t1eWl3dnA2NzNpNTJwbzNvcHRxejdxaCJ9.tIGjuwey9icme7TC-y-U9g'
        });

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 2,
  "maxOpacity": .8,
  // scales the radius based on map zoom
  "scaleRadius": true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": false,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lon',
  // which field name in your data represents the data value - default "value"
  valueField: 'intensity'
};


var heatmapLayer = new HeatmapOverlay(cfg);

var mymap = new L.Map('mapid', {
  center: new L.LatLng(45.00, -87.00),
  zoom: 5,
  layers: [baseLayer, imageOverlay, heatmapLayer]
});
heatmapLayer.setData(data);
imageOverlay.setOpacity(0.5);

/*
var mymap = L.map('mapid').setView([47.00, -87.00], 5);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmRlYW4iLCJhIjoiY2t1eWl3dnA2NzNpNTJwbzNvcHRxejdxaCJ9.tIGjuwey9icme7TC-y-U9g', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoicmRlYW4iLCJhIjoiY2t1eWl3dnA2NzNpNTJwbzNvcHRxejdxaCJ9.tIGjuwey9icme7TC-y-U9g'
        }).addTo(mymap);
        var imageUrl = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event_clear.png',
            imageBounds = [[51.2 + 2.0, -100.0 - 2.0], [35.0 - 2.0, -70.0 + 2.0]],
            imageOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(mymap);
        imageOverlay.setOpacity(0.5);
*/
