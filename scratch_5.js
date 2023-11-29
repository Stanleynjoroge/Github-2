// OpenCage Geocoding API endpoint
const apiKey = 'b41d417937094665ab100b905a07fea6';
const geocodeEndpoint = 'https://api.opencagedata.com/geocode/v1/json';

document.getElementById('location-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the location name and description from the form
  const locationName = document.getElementById('location-name').value;
  const locationDescription = document.getElementById('location-description').value;

  // Perform geocoding using OpenCage API
  const url = `${geocodeEndpoint}?q=${encodeURIComponent(locationName)}&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extract latitude and longitude from the geocoding response
      const lat = data.results[0].geometry.lat;
      const lng = data.results[0].geometry.lng;

      // Add a marker to the map at the specified coordinates
      addMarkerToMap(lat, lng, locationName, locationDescription);

      // Clear the form fields
      document.getElementById('location-name').value = '';
      document.getElementById('location-description').value = '';
    })
    .catch(error => {
      console.error('Error geocoding: ' + error);
    });
});

// Function to add a marker to the map
function addMarkerToMap(lat, lng, name, description) {
  // Create a marker and add it to the map
  const marker = L.marker([lat, lng]).addTo(map);

  // Create a popup for the marker with the name and description
  marker.bindPopup(`<b>${name}</b><br>${description}`).openPopup();
}
