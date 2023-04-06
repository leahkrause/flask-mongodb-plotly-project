// Define myMap and center it on the US
let myMap = L.map("map", {
    center: [
      39.8282, -98.5795
    ],
    zoom: 5,
    // Add will-change property to the map
    willChange: 'transform'
  });
  
  // Add a tile layer to the map
  const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
  }).addTo(myMap);
  
  // Add a 'load' event listener to the tile layer
  tileLayer.on('load', function() {
    console.log('Tile layer loaded');
  });
  
  // Define the path to the CSV file and use D3 to fetch the data from the CSV
  d3.csv("/Resources/Mother Jones - Mass Shootings Database, 1982 - 2023 - Sheet1.csv")
    .then(function(data) {
      console.log(data);
  
      // Create empty layer groups for each decade
      const layers = {
        "1980s": L.featureGroup(),
        "1990s": L.featureGroup(),
        "2000s": L.featureGroup(),
        "2010s": L.featureGroup(),
        "2020s": L.featureGroup(),
      };
    // Add all the decade layers to the map
    for (const decade in layers) {
      layers[decade].addTo(myMap);
  }
  
      // Iterate through each row of the CSV data and add a marker for each row to its corresponding decade layer
      for (let i = 0; i < data.length; i++) {
        const row = data[i];
  
        // Extract the necessary data from the rows
        const caseName = row.case;
        const location = row.location;
        const date = new Date(row.date); // Convert the date string to a Date object
        const fatalities = row.fatalities;
        const injured = row.injured;
        const summary = row.summary;
  
        // Get the decade for the incident year
        const year = date.getFullYear();
        const decade = `${Math.floor(year/10)}0s`;
  
        // Create a circle marker for the row and add it to the corresponding decade layer
        const marker = L.circleMarker([parseFloat(row.latitude), parseFloat(row.longitude)], {
          radius: parseInt(fatalities) * 1.5,
          color: "#FF5733",
          fillOpacity: 0.5
        }).addTo(layers[decade]);
  
        // Create a popup for the marker
        const popupContent = `<b>Case:</b> ${caseName}<br><b>Location:</b> ${location}<br><b>Date:</b> ${date.toDateString()}<br><b>Fatalities:</b> ${fatalities}<br><b>Injured:</b> ${injured}<br><b>Summary:</b> ${summary}`;
        marker.bindPopup(popupContent);
        console.log(layers[decade].getLayers());
      }
      
      // Add the decade layers to the map and create a control layer to toggle between them
      L.control.layers(null, layers).addTo(myMap);
    })
    
    .catch(function(error) {
      console.log(error);
    });