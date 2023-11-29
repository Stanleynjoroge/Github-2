// Initialize the map
var map = L.map('map').setView([-1.2921, 36.8219], 6);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Initialize an empty layer group to hold markers
var markersLayer = L.layerGroup().addTo(map);

// Function to add a marker to the map
function addMarker(e) {
    e.preventDefault();

    // Get name and description from the form
    var name = document.getElementById('marker-name').value;
    var description = document.getElementById('marker-description').value;

    // Create a marker at the clicked location
    var marker = L.marker(e.latlng).addTo(markersLayer);

    // Bind a popup with the name and description
    marker.bindPopup(`<strong>${name}</strong><br>${description}`).openPopup();

    // Clear the form fields
    document.getElementById('marker-name').value = '';
    document.getElementById('marker-description').value = '';
}

// Add an event listener to the form
document.getElementById('marker-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting as usual

    // Get the latitude, longitude, name, and description from the form input
    var latitude = parseFloat(document.getElementById('latitude').value);
    var longitude = parseFloat(document.getElementById('longitude').value);
    var name = document.getElementById('marker-name').value;
    var description = document.getElementById('marker-description').value;

    // Create a marker at the specified coordinates
    var marker = L.marker([latitude, longitude]).addTo(map);

    // Bind a popup with the name and description
    marker.bindPopup(`<strong>${name}</strong><br>${description}`).openPopup();

    // Clear the form fields
    document.getElementById('latitude').value = '';
    document.getElementById('longitude').value = '';
    document.getElementById('marker-name').value = '';
    document.getElementById('marker-description').value = '';
});

