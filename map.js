
/* make initial image overlay (day 0) */ 

var imageUrl = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_projected.png';
window.imageOverlay = L.imageOverlay(
    imageUrl,
    [[51.2 + 3.6 + 0.9, -100.0 - 1.9 - 0.5], [35.0 - 5.5, -70.0 + 4.5]],
    {
        opacity: 0.5,
        interactive: true
    });

/* build map base layer with map data from mapbox */

var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmRlYW4iLCJhIjoiY2t1eWl3dnA2NzNpNTJwbzNvcHRxejdxaCJ9.tIGjuwey9icme7TC-y-U9g', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoicmRlYW4iLCJhIjoiY2t1eWl3dnA2NzNpNTJwbzNvcHRxejdxaCJ9.tIGjuwey9icme7TC-y-U9g'
        });

/* initialize map object, add in base and image layers */

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


/* make popup object to display when map is clicked */

var popup = L.popup();
function makePopup(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked map at " + e.latlng.toString())
        .openOn(mymap);
}

/* function that runs when map is clicked. Adds popup and
   puts 10 days of data into stats box */

function imagePopup(e) {
    //var e = leafletEvent.originalEvent;
    var temp_event = e.originalEvent;
    var rect = temp_event.target.getBoundingClientRect();
    var zoomedX = temp_event.clientX - rect.left; //x position within the element.
    var zoomedY = temp_event.clientY - rect.top;  //y position within the element

    const x = Math.round(zoomedX * imgWidth / rect.width);
    const y = Math.round(zoomedY * imgHeight / rect.height);
    
    var imgEvent = document.createElement('img');
    imgEvent.src = window.imageOverlay.getElement().src;
        
    var canvas = document.createElement('canvas');
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    canvas.getContext('2d').drawImage(imgEvent, 0, 0, imgWidth, imgHeight);
    var pixelData = canvas.getContext('2d').getImageData(x, y, imgWidth, imgHeight);
    var red = pixelData.data[0];
    var green = pixelData.data[1];
    var blue = pixelData.data[2];
    var max_color = Math.max(pixelData.data[0], pixelData.data[1], pixelData.data[2]);
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
    
    //var imgVars = document.createElement('img');
    var data_10_days = [];    
    for(var day = 0; day < 10; day++) {
        // set html element to correct image
        let imgVars = document.createElement('img');
        let temp_str = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event';
        temp_str += day;
        temp_str += '_vars.png';
        imgVars.src = temp_str;
        
        // reset canvas
        canvas.getContext('2d').clearRect(0, 0, imgWidth, imgHeight);
        canvas.getContext('2d').drawImage(imgVars, 0, 0, imgWidth, imgHeight);
        
        let varsData = canvas.getContext('2d').getImageData(x, y, imgWidth, imgHeight); 
        let varsRed = varsData.data[0];
        let varsGreen = varsData.data[1];
        let varsBlue = varsData.data[2];
        let accprcp = ((varsRed / 255) * 200).toFixed(2);
        let acsnom = ((varsGreen / 255) * 200).toFixed(2);
        let qsnow = ((varsBlue / 255) * 200).toFixed(2);
        
        let imgRisk = document.createElement('img');
        let risk_str = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event' + day + '_projected.png';
        imgRisk.src = risk_str;
        
        canvas.getContext('2d').clearRect(0, 0, imgWidth, imgHeight);
        canvas.getContext('2d').drawImage(imgRisk, 0, 0, imgWidth, imgHeight);
        let riskData = canvas.getContext('2d').getImageData(x, y, imgWidth, imgHeight); 
        let riskRed = riskData.data[0];
        let riskGreen = riskData.data[1];
        let riskBlue = riskData.data[2];
        let daily_risk = 0.0;
        let max_risk_color = Math.max(riskData.data[0], riskData.data[1], riskData.data[2]);
        if (riskRed == 0) {
            daily_risk = 0;
        } else if (max_risk_color == riskRed) {
            daily_risk = 3;
        } else if (max_risk_color == riskGreen) {
            daily_risk = 1;
        } else {
            if (riskRed > riskGreen) {
                daily_risk = 2;
            }
        }
        let formatted_day = new Date();
        formatted_day = formatted_day.getDate()+day;
        let data_by_day = [formatted_day, daily_risk, accprcp, acsnom, qsnow];
        data_10_days[day] = data_by_day;
    }
    var statsTable = document.getElementById("popupStatsTable");
    
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
            statsTable.tBodies[0].rows[j].cells[k].innerHTML = data_10_days[j][k];
            statsTable.tBodies[0].rows[j].cells[k].setAttribute("border","1");
        }
    }
       
    popup
        .setLatLng(e.latlng)
        //.setContent("R: " + pixelData.data[0] + ", G: " + pixelData.data[1] + ", B: " + pixelData.data[2])
        .setContent('<H6>RISK: ' + risk + '</H6>')
        .openOn(mymap);
   
}

const imgWidth = 1500, imgHeight = 1200;
window.imageOverlay.on('click', imagePopup);
//mymap.on('click', makePopup);
