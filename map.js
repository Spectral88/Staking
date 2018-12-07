// create the map object
var map = L.map('map',{drawControl:true});
map.setView({
  "lat": 39.30495873580739,
  "lng": -88.01123052835466
});
map.setZoom(19);

// Open street maps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// move Zoom control to bottom left
map.zoomControl.setPosition('bottomright');

// Initialize the FeatureGroup to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Initialize the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw({
    draw:false,
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

var leftToolbar = document.getElementsByClassName('leaflet-top leaflet-left');
leftToolbar[0].style.display = 'none';
drawControl.setPosition('topright');
