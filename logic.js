// Define myMap and center it on the US
let myMap = L.map("map", {
  center: [
    39.8282, -98.5795
  ],
  zoom: 5,
});

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(myMap);

// Define the path to the CSV file and use D3 to fetch the data from the CSV
d3.csv("/Resources/full_database_cleaned.utf8.csv", function(data) {
  console.log(data);

    // Create an empty feature group to hold the markers
    const markerGroup = L.featureGroup().addTo(myMap);

    // Iterate through each row of the CSV data and add a marker for each row
    for (let i = 0; i < data.length; i++) {
      const row = data[i];

      // Extract the necessary data from the rows
      const city = row.City;
      const state = row.State;
      const date = row["Full Date"];
      const killed = row["Number Killed"];
      const injured = row["Number Injured"];

      // Create a circle marker for the row
      const marker = L.circleMarker([row.Latitude, row.Longitude], {
        radius: killed * 5, // Scale the radius based on Number Killed
        color: "red",
        fillOpacity: 0.5
      }).addTo(markerGroup);

      // Create a popup for the marker
      const popupContent = `<b>City:</b> ${city}<br><b>State:</b> ${state}<br><b>Date:</b> ${date}<br><b>Number Killed:</b> ${killed}<br><b>Number Injured:</b> ${injured}`;
      marker.bindPopup(popupContent);
    }
  })
  .catch(function(error) {
    console.log(error);
  });

