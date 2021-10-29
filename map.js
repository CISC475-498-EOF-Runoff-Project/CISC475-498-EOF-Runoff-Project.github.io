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

