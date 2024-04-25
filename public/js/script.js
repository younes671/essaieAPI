// Initialise votre carte Leaflet
var map = L.map('map').setView([48.5348, 7.69545], 12);

// Ajoute une couche de tuiles OpenStreetMap à la carte
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Ajoute un marqueur à la position [51.5, -0.09] à la carte
var marker = L.marker([48.5348, 7.69545]).addTo(map);

// Ajoute un cercle à la position [51.508, -0.11] avec des propriétés spécifiées à la carte
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,   
//     radius: 500
// }).addTo(map);

// Ajoute un polygone avec les points spécifiés à la carte
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);
     
// Lie un popup au marqueur avec un contenu spécifique et l'ouvre par défaut
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// // Lie un popup au cercle
// circle.bindPopup("I am a circle.");

// // Lie un popup au polygone
// polygon.bindPopup("I am a polygon.");

// // Crée un popup autonome et l'ouvre à la position [51.513, -0.09]
// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

// Fonction appelée lorsque la carte est cliquée, affiche une alerte avec les coordonnées du clic
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

// Associe l'événement 'click' de la carte à la fonction onMapClick
map.on('click', onMapClick);

// Crée un popup vide
var popup = L.popup();

// Fonction appelée lorsque la carte est cliquée, affiche un popup avec les coordonnées du clic
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

// Associe l'événement 'click' de la carte à la nouvelle fonction onMapClick
map.on('click', onMapClick);

console.log("ok")