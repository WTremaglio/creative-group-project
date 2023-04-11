// An array of objects representing the ant colonies
const colonies = [
    { id: 1, coords: [51.526678, -0.039981] },
    { id: 2, coords: [51.525790, -0.039395] },
    { id: 3, coords: [51.525645, -0.038892] },
    { id: 4, coords: [51.525458, -0.038965] },
    { id: 5, coords: [51.524887, -0.038715] }
];

// Run the following function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the ID "colony-list"
    const colonyList = document.getElementById("colony-list");

    // If the element exists, add a list item for each ant colony
    if (colonyList) {
        colonies.forEach(function (colony) {
            const listItem = `
          <li>
            <div class="colony-name"><strong>Ant Colony ${colony.id}</strong></div>
            <div class="colony-button"><a href="visualization.html?colony=${colony.id}"><button>View Visualization</button></a></div>
          </li>
        `;
            colonyList.innerHTML += listItem;
        });
    }
    // Call the initMap function to initialize the map
    initMap();
});

// Function to initialize the Leaflet map
function initMap() {
    // Create a new map object and set its view
    var map = L.map("map", { minZoom: 16, maxZoom: 18 }).setView([51.5258916, -0.0393896], 17);

    // Add a tile layer to the map using OpenStreetMap data
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors' }).addTo(map);

    // Add a marker for each ant colony to the map
    colonies.forEach(function (colony) {
        var marker = L.marker(colony.coords).addTo(map).bindPopup(`Colony ${colony.id}`);

        // When the marker is clicked, open its popup and add a click listener to the popup content
        marker.on('click', function (e) {
            e.target.openPopup();
            var popupContent = document.querySelector('.leaflet-popup-content');
            popupContent.addEventListener('click', function () {
                // Redirect the user to a visualization page for the clicked colony
                window.location.href = `visualization.html?colony=${colony.id}`;
            });
        });
    });
}
