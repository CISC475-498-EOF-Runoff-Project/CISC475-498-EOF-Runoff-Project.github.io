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
const databaseRef = ref(database);
/*
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

function pullFromFirebase(id) {
   coordRef = ref(database, id);
   onValue(coordRef, (snapshot) => {
       const firebase_data = snapshot.val()
       return firebase_data;
   });
}
//pullFromFirebase('1');

var temp_data = pullFromFirebase('1');
console.log(temp_data);
console.log(typeof(temp_data));
*/
var data = {
    max: 0,
    data: []
};

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
var imageUrl = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event_clear.png',
            imageBounds = [[51.2 + 2.0, -100.0 - 2.0], [35.0 - 2.0, -70.0 + 2.0]],
            imageOverlay = L.imageOverlay(imageUrl, imageBounds);
*/
var imageUrl = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_projected.png';
window.imageOverlay = L.imageOverlay(
    imageUrl,
    [[51.2 + 3.6 + 0.9, -100.0 - 1.9 - 0.5], [35.0 - 5.5, -70.0 + 4.5]],
    {
        opacity: 0.5,
        interactive: true
    });
  

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
  minZoom: 4,
  maxZoom: 6,
  //layers: [baseLayer, imageOverlay, heatmapLayer]
  layers: [baseLayer, window.imageOverlay]
});
heatmapLayer.setData(data);
mymap.setMaxBounds([
    [52.73, -100.49],
    [30.13, -64.72]
]);
//imageOverlay.bindPopup(imagePopup);

var popup = L.popup();

function makePopup(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked map at " + e.latlng.toString())
        .openOn(mymap);
}

function imagePopup(e) {
    //var e = leafletEvent.originalEvent;
    var temp_event = e.originalEvent;
    var rect = temp_event.target.getBoundingClientRect();
    var zoomedX = temp_event.clientX - rect.left; //x position within the element.
    var zoomedY = temp_event.clientY - rect.top;  //y position within the element

    const x = Math.round(zoomedX * imgWidth / rect.width);
    const y = Math.round(zoomedY * imgHeight / rect.height);
    console.log(x, y);
    
    var imgEvent = document.createElement('img');
    //imgEvent.src = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event_clear.png';
    imgEvent.src = window.imageOverlay.getElement().src;
    
    var imgVars = document.createElement('img');
    let test_str = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_clear.png';
    let test_arr = test_str.split("Event");
    console.log(test_arr);
    let temp_str = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event';
    temp_str += '0';
    temp_str += '_vars.png';
    imgVars.src = temp_str;
    
    var canvas = document.createElement('canvas');
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    canvas.getContext('2d').drawImage(imgEvent, 0, 0, imgWidth, imgHeight);
    var pixelData = canvas.getContext('2d').getImageData(x, y, imgWidth, imgHeight);
    let red = pixelData.data[0];
    let green = pixelData.data[1];
    let blue = pixelData.data[2];
    let max_color = Math.max(pixelData.data[0], pixelData.data[1], pixelData.data[2]);
    var risk = 0;
    if (red == 0) {
        risk = 0;
    } else if (max_color == red) {
        risk = 3;
        console.log(red);
    } else if (max_color == green) {
        risk = 1;
    } else {
        if (red > green) {
            risk = 2;
        }
    }                
    //var canvas = document.createElement('canvas');
    //canvas.width = imgWidth;
    //canvas.height = imgHeight;
    canvas.getContext('2d').clearRect(0, 0, imgWidth, imgHeight);
    canvas.getContext('2d').drawImage(imgVars, 0, 0, imgWidth, imgHeight);
    var varsData = canvas.getContext('2d').getImageData(x, y, imgWidth, imgHeight); 
    let red = varsData.data[0];
    let green = varsData.data[1];
    let blue = varsData.data[2];
    var accprcp = red * 200.0;
    var acsnom = green * 200.0;
    var qsnow = blue * 200.0;
    
    var data_by_day = [1, risk, accprcp, acsnom, qsnow]
    var statsTable = document.getElementById("popupStatsTable");
    
    //iterate through rows
    for(var j = 1; j < statsTable.rows.length; j++) {
        //iterate through cells in row
        for (var k = 0; k < statsTable.rows[j].cells.length; k++) {
            statsTable.rows[j].cells[k].innerHTML = data_by_day[k];
        }
    }
   
    var accprcp = 0;
    
    popup
        .setLatLng(e.latlng)
        //.setContent("R: " + pixelData.data[0] + ", G: " + pixelData.data[1] + ", B: " + pixelData.data[2])
        .setContent('<H6>RISK: ' + risk + '</H6><br><p>ACCPRCP: ' + accprcp + '</p><br><p>' + "R: " + pixelData.data[0] + ", G: " + pixelData.data[1] + ", B: " + pixelData.data[2] + '</p>')
        .openOn(mymap);
   
}

const imgWidth = 1500, imgHeight = 1200;
window.imageOverlay.on('click', imagePopup);
//mymap.on('click', makePopup);

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
