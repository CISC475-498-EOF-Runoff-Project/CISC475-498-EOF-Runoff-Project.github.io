import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAtJmn6erCN842Rd6_JtO4-vGEz5vpmjDc",
    authDomain: "cisc475-498-eof-runoff-project.firebaseapp.com",
    projectId: "cisc475-498-eof-runoff-project",
    storageBucket: "cisc475-498-eof-runoff-project.appspot.com",
    messagingSenderId: "984037978789",
    appId: "1:984037978789:web:3cefc17cb8e735b88b934c",
    measurementId: "G-BNHJV3C11Q"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


//import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
const databaseRef = ref(database);

function pullFromFirebase(id) {
  get(child(databaseRef, id)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function grabFromFirebase(id) {
    return onValue(ref(database, id), (snapshot) => {
      const username = (snapshot.val());
      // ...
    }, {
      onlyOnce: true
    });
}
//pullFromFirebase('1');

let temp_data = grabFromFirebase('1');
console.log(temp_data);
console.log(typeof(temp_data));
var data = [];
//let temp_obj = {lat:temp_data.lat, lng:temp_data.lon, value:temp_data.intensity};
//data.push(temp_obj);
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
