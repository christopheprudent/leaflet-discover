var mymap = L.map('mapid').setView([44.915376, -0.244534], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

// add marker
var marker = L.marker([44.915376, -0.244534]).addTo(mymap);

// add circle
var circle = L.circle([44.915376, -0.3], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

// add polygon
var polygon = L.polygon([
    [44.915376, -0.22],
    [44.9, -0.21],
    [44.92, -0.19]
]).addTo(mymap);