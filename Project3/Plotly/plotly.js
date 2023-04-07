// // Read in CSV data
// d3.csv("database.utf8.csv").then(function(csvData) {

//     console.log(csvData);

//     var values = [];
//     var labels = [];

//     csvData.forEach(function(row) {
//         labels.push(row[0]); 
//         values.push(+row[71]);          
//     });

//     var data = [{
//         values: values,
//         labels: labels,
//         type: 'pie'
//     }];

//     var layout = {
//         title: 'Relationship with Other Shooting(s)',
//         showlegend: true,
//         legend: {
//             x: 1,
//             y: 0.5
//         },
//         font: {
//             family: 'Arial, sans-serif',
//             size: 14,
//             color: '#333'
//         },
//         margin: {
//             l: 50,
//             r: 50,
//             b: 50,
//             t: 80
//         }
//     };

//     Plotly.newPlot("plot", data, layout);

// }).catch(function(error) {
//     console.log(error);
// });
// </script>

// </body>
// </html>


// // function processData(allRows) {console.log(allRows);
// //     var x = [], y = [];
// //     for (var i=0; i<allRows.length; i++) {
// //         row = allRows[i];
// //         x.push( row['Relationship with Other Shooting(s'] );
// //         y.push( row['AAPL_y'] );
// //     }
// // };
// // console.log