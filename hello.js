var map = L.map('mapid').setView([43.64701, -79.39425], 3);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var firefoxIcon = L.icon({
    iconUrl: 'http://joshuafrazier.info/images/firefox.svg',
    iconSize: [38, 95], // size of the icon
    });

var marker = L.marker([43.64701, -79.39425], {icon: firefoxIcon}).addTo(map);