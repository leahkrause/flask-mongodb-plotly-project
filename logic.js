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
d3.csv("/Resources/Mother Jones - Mass Shootings Database, 1982 - 2023 - Sheet1.csv", function(data) {
  console.log(data);

    // Create an empty feature group to hold the markers
    const markerGroup = L.featureGroup().addTo(myMap);

    // Iterate through each row of the CSV data and add a marker for each row
    for (let i = 0; i < data.length; i++) {
      const row = data[i];

      // Extract the necessary data from the rows
      const caseName = row.case;
      const location = row.location;
      const date = row.date;
      const fatalities = row.fatalities;
      const injured = row.injured;
      const summary = row.summary;

      // Create a circle marker for the row
      const marker = L.circleMarker([row.latitude, row.longitude], {
        radius: fatalities * 5, // Scale the radius based on Number Killed
        color: "red",
        fillOpacity: 0.5
      }).addTo(markerGroup);

      // Create a popup for the marker
      const popupContent = `<b>Case:</b> ${caseName}<br><b>Location:</b> ${location}<br><b>Date:</b> ${date}<br><b>Fatalities:</b> ${fatalities}<br><b>Injured:</b> ${injured}<br><b>Summary:</b> ${summary}`;
      marker.bindPopup(popupContent);
    }
  })
  .catch(function(error) {
    console.log(error);
  });

