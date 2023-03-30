// Create a new Leaflet map instance
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Add geocoding functionality to the map
var geocoder = L.Control.geocoder({
  defaultMarkGeocode: false,
}).addTo(map);

// Convert a set of latitude and longitude coordinates to a location
var latlng = L.latLng(51.5, -0.1);
geocoder.reverse(latlng, map.options.crs.scale(map.getZoom()), function(results) {
  var location = results[0].name;
  console.log(location); // output: "London, England"
});
