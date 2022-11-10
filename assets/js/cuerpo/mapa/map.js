var map = L.map('map', { 
    center: [-2.189930, -79.888291], 
    zoom: 0, 
    maxBounds: [
        // sur - este
        [-2.285927, -79.863656], 
        // norte - 0este
        [-2.054037, -80.100000]], 
    minZoom: 13, 
    maxZoom: 18}); 

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);