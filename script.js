function pdfView(sw) {
    var src;
    if (sw == 0) {
      src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_diff.jpg"
  } else if (sw == 1) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day1.pdf"
  } else if (sw == 2) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day2.pdf"
  } else if (sw == 3) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day3.pdf"
  } else if (sw == 4) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day4.pdf"
  } else if (sw == 5) {
       src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/Event0_day5.pdf"
  } else {
    src = "https://CISC475-498-EOF-Runoff-Project.github.io/images/event.pdf"
  }
    document.getElementById('plugin').src = src;
 }

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
