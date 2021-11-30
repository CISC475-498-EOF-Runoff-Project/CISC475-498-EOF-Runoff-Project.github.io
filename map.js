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

var mymap = new L.Map('mapid', {
  center: new L.LatLng(45.00, -87.00),
  zoom: 5,
  minZoom: 4,
  maxZoom: 6,
  //layers: [baseLayer, imageOverlay]
  layers: [baseLayer, window.imageOverlay]
});
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
    red = varsData.data[0];
    green = varsData.data[1];
    blue = varsData.data[2];
    let accprcp = ((red / 255) * 200).toFixed(3);
    let acsnom = ((green / 255) * 200).toFixed(3);
    let qsnow = ((blue / 255) * 200).toFixed(3);
    
    var data_by_day = [1, risk, accprcp, acsnom, qsnow]
    var statsTable = document.getElementById("popupStatsTable");
    //var statsTableBody = document.getElementById("statsTableBody");
    
    //iterate through rows
    for(var j = 0; j < 10; j++) {
        if (statsTable.tBodies[0].rows.length < j+1) {
            statsTable.tBodies[0].insertRow(j);
        }
        //iterate through cells in row
        for (var k = 0; k < 5; k++) {
            if (statsTable.tBodies[0].rows[j].cells.length < k+1) {
                statsTable.tBodies[0].rows[j].insertCell(k);
            }
            statsTable.tBodies[0].rows[j].cells[k].innerHTML = data_by_day[k];
            statsTable.tBodies[0].rows[j].cells[k].setAttribute("border","1");
        }
    }
    
       
    popup
        .setLatLng(e.latlng)
        //.setContent("R: " + pixelData.data[0] + ", G: " + pixelData.data[1] + ", B: " + pixelData.data[2])
        .setContent('<H6>RISK: ' + risk + '</H6><br><p>' + "R: " + pixelData.data[0] + ", G: " + pixelData.data[1] + ", B: " + pixelData.data[2] + '</p>')
        .openOn(mymap);
   
}

const imgWidth = 1500, imgHeight = 1200;
window.imageOverlay.on('click', imagePopup);
//mymap.on('click', makePopup);
