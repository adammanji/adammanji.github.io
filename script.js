document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([49.1304, -106.3468], 4); // Center map on Canada

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define markers for the map
    var markers = [
        {lat: 43.651070, lng: -79.347015, message: 'Toronto: <a href="https://www.theglobeandmail.com/opinion/article-with-islamophobic-incidents-on-the-rise-muslim-canadians-are-worried/">Frequent harassment</a> in public spaces.'},
        {lat: 49.282730, lng: -123.120735, message: 'Vancouver: Lawyer creates <a href="https://www.middleeasteye.net/news/islamophobia-hotline-help-victims-anti-muslim-hate-crimes-canada">Islamophobia hotline</a> to help victims.'},
        {lat: 45.501690, lng: -73.567253, message: 'Montreal: <a href="https://www.cbc.ca/radio/thecurrent/the-current-for-march-9-2018-1.4567875/had-we-known-you-were-muslim-not-sure-we-would-have-hired-you-workers-face-discrimination-in-quebec-1.4567939">Discrimination</a> in job hiring.'},
        {lat: 51.044733, lng: -114.071883, message: 'Calgary: <a href="https://ucalgary.ca/news/campus-comes-together-national-day-remembrance-quebec-city-mosque-attack-and-action-against">Community action</a> countering Islamophobia.'}
    ];

    markers.forEach(function(marker) {
        L.marker([marker.lat, marker.lng]).addTo(map)
            .bindPopup(marker.message);
    });
});
