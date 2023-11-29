// User's provided address
var userAddress = "1600 Amphitheatre Parkway, Mountain View, CA";

// Make a request to the geocoding API
var apiKey = "b41d417937094665ab100b905a07fea6";
var apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(userAddress)}&key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the coordinates
    var location = data.results[0].geometry.location;
    var latitude = location.lat;
    var longitude = location.lng;

    // Autofill the form
    document.getElementById("latitudeField").value = latitude;
    document.getElementById("longitudeField").value = longitude;
  })
  .catch(error => {
    console.error("Error geocoding: " + error);
  });
