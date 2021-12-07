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

/* make popup object to display when map is clicked */

var popup = L.popup();

/* create helper text, disappears once map is clicked */

var statsTableHolder = document.getElementById("statsTableHolder");
var helperSpan = document.createElement('span');
helperSpan.setAttribute('style','color:white');
var helperText = document.createTextNode("Click a region on the map to get more detailed information!");
helperSpan.append(helperText);
statsTableHolder.appendChild(helperSpan);

/* function that runs when map is clicked. Adds popup + fills table with 10 days of stats */

function imagePopup(e) {
    //var e = leafletEvent.originalEvent;
    var temp_event = e.originalEvent;
    var rect = temp_event.target.getBoundingClientRect();
    var zoomedX = temp_event.clientX - rect.left; //x position within the element.
    var zoomedY = temp_event.clientY - rect.top;  //y position within the element

    const x = Math.round(zoomedX * imgWidth / rect.width);
    const y = Math.round(zoomedY * imgHeight / rect.height);

    var statsTable = document.getElementById("popupStatsTable");
  
    if (statsTable.tBodies[0].rows.length == 0) {
        statsTableHolder.removeChild(helperSpan);
    }
    
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
        }
    }
    
    let str = window.imageOverlay.getElement().src;
    let popupday = str.charAt(str.length - 15);
    
    for(var day = 0; day < 10; day++) {
        fillGridRow(x, y, day, popupday, e);
    }   
}


/* TODO: Change function name to updatePopups() */
/* Helper function called in slidebar.js to update popup text */

function clearpopups(newDay) {
    //mymap.closePopup();
    let statsTable = document.getElementById("popupStatsTable");
    if (statsTable.tBodies[0].rows.length > 1) {
        popup.setContent('<H6>RISK: ' + statsTable.tBodies[0].rows[newDay].cells[1].innerHTML + '</H6>');
    }
}

const imgWidth = 1600, imgHeight = 1600;
window.imageOverlay.on('click', imagePopup);


/* Fills one row of the stats box table. Done independently because js loads images async */

function fillGridRow(x, y, img_day, popupday, e) {
    
    var statsTable = document.getElementById("popupStatsTable");
    let imgVars = new Image();
    imgVars.src = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event' + img_day + '_vars.png';
    imgVars.onload = function() {
        
        let tempCanvas = document.createElement('canvas');
        tempCanvas.width = imgWidth;
        tempCanvas.height = imgHeight;
        let tempCtx = tempCanvas.getContext('2d');
        
        tempCtx.clearRect(0, 0, imgWidth, imgHeight);
        tempCtx.drawImage(imgVars, 0, 0, imgWidth, imgHeight);

        let varsData = tempCtx.getImageData(x, y, imgWidth, imgHeight); 
        let accprcp = ((varsData.data[0] / 255) * 200).toFixed(2);
        let acsnom = ((varsData.data[1] / 255) * 200).toFixed(2);
        let qsnow = ((varsData.data[2] / 255) * 200).toFixed(2);
        statsTable.tBodies[0].rows[img_day].cells[2].innerHTML = accprcp;
        statsTable.tBodies[0].rows[img_day].cells[3].innerHTML = acsnom;
        statsTable.tBodies[0].rows[img_day].cells[4].innerHTML = qsnow;
        for (var iter = 2; iter < 5; iter++) {
            if (statsTable.tBodies[0].rows[img_day].cells[iter].innerHTML == 0.00) {
                statsTable.tBodies[0].rows[img_day].cells[iter].innerHTML = "--";
            }
        }
    }
    
    let imgRisk = new Image();
    imgRisk.src = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event' + img_day + '_projected.png';
    imgRisk.onload = function() {
        
        let tempCanvas = document.createElement('canvas');
        tempCanvas.width = imgWidth;
        tempCanvas.height = imgHeight;
        let tempCtx = tempCanvas.getContext('2d');
        
        tempCtx.clearRect(0, 0, imgWidth, imgHeight);
        tempCtx.drawImage(imgRisk, 0, 0, imgWidth, imgHeight);

        let riskData = tempCtx.getImageData(x, y, imgWidth, imgHeight); 
        let riskRed = riskData.data[0];
        let riskGreen = riskData.data[1];
        let riskBlue = riskData.data[2];
        let daily_risk = "MINIMAL";
        let max_risk_color = Math.max(riskData.data[0], riskData.data[1], riskData.data[2]);
        if (riskRed == 0) {
            daily_risk = "MINIMAL";
        } else if (max_risk_color == riskRed) {
            daily_risk = "HIGH";
        } else if (max_risk_color == riskGreen) {
            daily_risk = "LOW";
        } else {
            if (riskRed > riskGreen) {
                daily_risk = "MODERATE";
            }
        }
        
        statsTable.tBodies[0].rows[img_day].cells[1].innerHTML = daily_risk;
        if (img_day == popupday) {
            popup
                .setLatLng(e.latlng)
                .setContent('<H6>RISK: ' + statsTable.tBodies[0].rows[popupday].cells[1].innerHTML + '</H6>')
                .openOn(mymap);
        }
        if (daily_risk == "MINIMAL") {
            statsTable.tBodies[0].rows[img_day].cells[1].setAttribute("style","color: #BBFFBB");
        }
        else if (daily_risk == "LOW") {
            statsTable.tBodies[0].rows[img_day].cells[1].setAttribute("style","color: white");
        }
        else if (daily_risk == "MODERATE") {
            statsTable.tBodies[0].rows[img_day].cells[1].setAttribute("style","color: #FFDDBB");
        }
        else {
            statsTable.tBodies[0].rows[img_day].cells[1].setAttribute("style","color: #FFBBBB");
        }
    }
    let formatted_day = new Date();
    let date_to_show = "Today";
    if (img_day != 0) {
        formatted_day.setDate(formatted_day.getDate() + img_day);
        date_to_show = (formatted_day.getMonth()+1) + "/" + formatted_day.getDate();
    }
    statsTable.tBodies[0].rows[img_day].cells[0].innerHTML = date_to_show;
}

