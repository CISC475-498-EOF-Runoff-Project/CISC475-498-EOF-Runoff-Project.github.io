//function for searchbar to parse the entered address and return latitude and longitude to the model for focus
function geocodeAddress(){
	var requestOptions = {
		method: 'GET',
  	};
	const address = document.getElementById("addressInput").value;
	if (!address || address.length < 3) {
		alert("The address string is too short. Enter at least three symbols");
		return;
	}
	
	const geocodeURL = 'https://api.geoapify.com/v1/geocode/search?text=' + encodeURIComponent(address) + '&apiKey=209bb934353745d3ace852db14dc31a2';
  	fetch(geocodeURL, requestOptions)
		.then(response => response.json())
		.then(result => {
			document.getElementById("longVal").value = result.features[0].geometry.coordinates[0];
			document.getElementById("latVal").value = result.features[0].geometry.coordinates[1];
		});

	}