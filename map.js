// create the map object
var map = L.map('map');
map.setView({
  "lat": 39.30495873580739,
  "lng": -88.01123052835466
});
map.setZoom(19);

// Open street maps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// move Zoom control to bottom left
map.zoomControl.setPosition('bottomright');
