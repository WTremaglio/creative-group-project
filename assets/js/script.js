var map = L.map("map", { minZoom: 16, maxZoom: 18 }).setView([51.5258916, -0.0393896], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors' }).addTo(map);

var marker1 = L.marker([51.526678, -0.039981]).addTo(map).bindPopup("Colony 1");
var marker2 = L.marker([51.525790, -0.039395]).addTo(map).bindPopup("Colony 2");
var marker3 = L.marker([51.525645, -0.038892]).addTo(map).bindPopup("Colony 3");
var marker4 = L.marker([51.525458, -0.038965]).addTo(map).bindPopup("Colony 4");
var marker5 = L.marker([51.524887, -0.038715]).addTo(map).bindPopup("Colony 5");

marker1.on('click', function (e) {
    e.target.openPopup();
    var popupContent = document.querySelector('.leaflet-popup-content');
    popupContent.addEventListener('click', function () {
        window.location.href = `ant-colony-1.html`;
    });
});

marker2.on('click', function (e) {
    e.target.openPopup();
    var popupContent = document.querySelector('.leaflet-popup-content');
    popupContent.addEventListener('click', function () {
        window.location.href = `ant-colony-2.html`;    });
});

marker3.on('click', function (e) {
    e.target.openPopup();
    var popupContent = document.querySelector('.leaflet-popup-content');
    popupContent.addEventListener('click', function () {
        window.location.href = `ant-colony-3.html`;    });
});

marker4.on('click', function (e) {
    e.target.openPopup();
    var popupContent = document.querySelector('.leaflet-popup-content');
    popupContent.addEventListener('click', function () {
        window.location.href = `ant-colony-4.html`;    });
});

marker5.on('click', function (e) {
    e.target.openPopup();
    var popupContent = document.querySelector('.leaflet-popup-content');
    popupContent.addEventListener('click', function () {
        window.location.href = `ant-colony-5.html`;    });
});