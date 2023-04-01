// Define myMap and center it on the US
let myMap = L.map("map", {
  center: [
    39.8282, -98.5795
  ],
  zoom: 4,
});

// Define the path to the CSV file and use D3 to fetch the data from the CSV
d3.csv("Resources/full_database_cleaned.utf8.csv")
  .then(function(data) {
    console.log(data);
    // Your code for working with the data goes here
  })
  .catch(function(error) {
    console.log(error);
  

  // Create an empty feature group to hold the markers
  const markerGroup = L.featureGroup().addTo(myMap);

  // Loop through the incident data and create a new marker for each incident
  data.forEach(incident => {
    const latlng = L.latLng(incident.latitude, incident.longitude);

    // Calculate the radius of the marker based on the number of fatalities
    const radius = Math.sqrt(incident.fatalities) * 5;

    const marker = L.circleMarker(latlng, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: radius
    }).addTo(markerGroup);

    // Bind a popup to the marker with the incident information
    marker.bindPopup(`
      <b>${incident.location[0]}</b><br>
      Date: ${incident.date}<br>
      Deaths: ${incident.fatalities}<br>
      Injured: ${incident.injured}<br>
    `);
  });
}).catch(function(error) {
  console.log(error);
});

