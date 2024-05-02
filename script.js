document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([56.1304, -106.3468], 4); // Center map on Canada

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define markers for the map
    var markers = [
        {lat: 43.651070, lng: -79.347015, message: 'Toronto: Frequent harassment in public spaces.'},
        {lat: 49.282730, lng: -123.120735, message: 'Vancouver: Protests against mosque constructions.'},
        {lat: 45.501690, lng: -73.567253, message: 'Montreal: Discrimination in job hiring.'},
        {lat: 51.044733, lng: -114.071883, message: 'Calgary: Successful community programs countering Islamophobia.'}
    ];

    markers.forEach(function(marker) {
        L.marker([marker.lat, marker.lng]).addTo(map)
            .bindPopup(marker.message);
    });
});
