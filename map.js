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

var statsTableHolder = document.getElementById("statsTableHolder");
var helperSpan = document.createElement('span');
helperSpan.setAttribute('style','color:white');
var helperText = document.createTextNode("Click a region on the map to get more detailed information!");
helperSpan.append(helperText);
statsTableHolder.appendChild(helperSpan);

/* function that runs when map is clicked. Adds popup and
   puts 10 days of data into stats box */

function imagePopup(e) {
    /* initialize stats box */
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
        
        
    //var e = leafletEvent.originalEvent;
    var temp_event = e.originalEvent;
    var rect = temp_event.target.getBoundingClientRect();
    var zoomedX = temp_event.clientX - rect.left; //x position within the element.
    var zoomedY = temp_event.clientY - rect.top;  //y position within the element

    const x = Math.round(zoomedX * imgWidth / rect.width);
    const y = Math.round(zoomedY * imgHeight / rect.height);
        
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    
    
    var data_10_days = [];    
    for(var day = 0; day < 10; day++) {
        console.log(day);
        // set html element to correct image
        let imgVars = new Image();
        imgVars.src = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event' + day + '_vars.png';
        //let accprcp = 0.00;
        //let acsnom = 0.00;
        //let qsnow = 0.00;
        imgVars.onload = function() {
            ctx.clearRect(0, 0, imgWidth, imgHeight);
            ctx.drawImage(imgVars, 0, 0, imgWidth, imgHeight);
            let varsData = ctx.getImageData(x, y, imgWidth, imgHeight); 
            let accprcp = ((varsData.data[0] / 255) * 200).toFixed(2);
            let acsnom = ((varsData.data[1] / 255) * 200).toFixed(2);
            let qsnow = ((varsData.data[2] / 255) * 200).toFixed(2);
            let varsArr = [accprcp, acsnom, qsnow];
            for(var vars_ind = 2; vars_ind < 5; vars_ind++) {
                if (varsArr[vars_ind - 2] == 0.00) {
                    statsTable.tBodies[0].rows[day].cells[vars_ind].innerHTML = "--";
                }
                else {
                    statsTable.tBodies[0].rows[day].cells[vars_ind].innerHTML = varsArr[vars_ind - 2];
                }
            }
        }
        let imgRisk = new Image();
        imgRisk.src = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event' + day + '_projected.png';
        //let daily_risk = "MINIMAL";
        imgRisk.onload = function() {
            ctx.clearRect(0, 0, imgWidth, imgHeight);
            ctx.drawImage(imgRisk, 0, 0, imgWidth, imgHeight);
            let riskData = ctx.getImageData(x, y, imgWidth, imgHeight); 
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
            
            statsTable.tBodies[0].rows[day].cells[1].innerHTML = daily_risk;
            if (daily_risk == "MINIMAL") {
                statsTable.tBodies[0].rows[day].cells[1].setAttribute("style","color: #BBFFBB");
            }
            else if (daily_risk == "LOW") {
                statsTable.tBodies[0].rows[day].cells[1].setAttribute("style","color: white");
            }
            else if (daily_risk == "MODERATE") {
                statsTable.tBodies[0].rows[day].cells[1].setAttribute("style","color: #FFDDBB");
            }
            else {
                statsTable.tBodies[0].rows[day].cells[1].setAttribute("style","color: #FFBBBB");
            }
        }
        let formatted_day = new Date();
        let date_to_show = "Today";
        if (day != 0) {
            formatted_day.setDate(formatted_day.getDate() + day);
            date_to_show = (formatted_day.getMonth()+1) + "/" + formatted_day.getDate();
        }
        statsTable.tBodies[0].rows[day].cells[0].innerHTML = date_to_show;
        //let data_by_day = [date_to_show, daily_risk, accprcp, acsnom, qsnow];
        //data_10_days[day] = data_by_day;    
    }
    /*
    console.log(data_10_days.length);
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
            if (data_10_days[j][k] == 0.00) {
                statsTable.tBodies[0].rows[j].cells[k].innerHTML = "--";
            }
            else {
                statsTable.tBodies[0].rows[j].cells[k].innerHTML = data_10_days[j][k];
            }
        }
        if (data_10_days[j][1] == "MINIMAL") {
            statsTable.tBodies[0].rows[j].cells[1].setAttribute("style","color: #BBFFBB");
        }
        else if (data_10_days[j][1] == "LOW") {
            statsTable.tBodies[0].rows[j].cells[1].setAttribute("style","color: white");
        }
        else if (data_10_days[j][1] == "MODERATE") {
            statsTable.tBodies[0].rows[j].cells[1].setAttribute("style","color: #FFDDBB");
        }
        else {
            statsTable.tBodies[0].rows[j].cells[1].setAttribute("style","color: #FFBBBB");
        }
    }
    */
    let str = window.imageOverlay.getElement().src;
    let popupday = str.charAt(str.length - 15);
    
    popup
        .setLatLng(e.latlng)
        .setContent('<H6>RISK: ' + statsTable.tBodies[0].rows[popupday].cells[1].innerHTML + '</H6>')
        .openOn(mymap);   
}

function clearpopups(newDay) {
    //mymap.closePopup();
    let statsTable = document.getElementById("popupStatsTable");
    if (statsTable.tBodies[0].rows.length > 1) {
        popup.setContent('<H6>RISK: ' + statsTable.tBodies[0].rows[newDay].cells[1].innerHTML + '</H6>');
    }
}

//const imgWidth = 1500, imgHeight = 1200;
const imgWidth = 1600, imgHeight = 1600;
window.imageOverlay.on('click', imagePopup);
//mymap.on('click', makePopup);

/*
function fillGridRow(x, y, img_day) {
    
    let imgCanvas = document.createElement('canvas');
    imgCanvas.width = imgWidth;
    imgCanvas.height = imgHeight;
    let img_ctx = imgCanvas.getContext('2d');
    

    let imgVars = new Image();
    imgVars.src = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event' + img_day + '_vars.png';
    
    img_ctx.clearRect(0, 0, imgWidth, imgHeight);
    img_ctx.drawImage(imgVars, 0, 0, imgWidth, imgHeight);
    
    let varsData = img_ctx.getImageData(x, y, imgWidth, imgHeight); 
    let accprcp = ((varsData.data[0] / 255) * 200).toFixed(2);
    let acsnom = ((varsData.data[1] / 255) * 200).toFixed(2);
    let qsnow = ((varsData.data[2] / 255) * 200).toFixed(2);
    
    let imgRisk = new Image();
    imgRisk.src = 'https://CISC475-498-EOF-Runoff-Project.github.io/images/Event' + img_day + '_projected.png';
    
    img_ctx.clearRect(0, 0, imgWidth, imgHeight);
    img_ctx.drawImage(imgVars, 0, 0, imgWidth, imgHeight);
    
    let riskData = img_ctx.getImageData(x, y, imgWidth, imgHeight); 
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
    
    let formatted_day = new Date();
    let date_to_show = "Today";
    if (img_day != 0) {
        formatted_day.setDate(formatted_day.getDate() + day);
        date_to_show = (formatted_day.getMonth()+1) + "/" + formatted_day.getDate();
    }

    let dailyArr = [date_to_show, daily_risk, accprcp, acsnom, qsnow];
    
    let statsTable = document.getElementById("popupStatsTable");
    
    for(var j = 0; j < img_day; j++) {
        if (statsTable.tBodies[0].rows.length < j+1) {
            statsTable.tBodies[0].insertRow(j);
        }
        if (j == img_day) {
            //iterate through cells in row
            for (var k = 0; k < 5; k++) {
                if (statsTable.tBodies[0].rows[j].cells.length < k+1) {
                    statsTable.tBodies[0].rows[j].insertCell(k);
                }
                if (dailyArr[k] == 0.00) {
                    statsTable.tBodies[0].rows[j].cells[k].innerHTML = "--";
                }
                else {
                    statsTable.tBodies[0].rows[j].cells[k].innerHTML = dailyArr[k];
                }
            }
        }
    }
}
*/
