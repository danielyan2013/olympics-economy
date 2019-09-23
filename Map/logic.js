// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "Afghanistan",
    location: [33.9391, 67.7100],
    medals: 2
  },
  {
    name: "Algeria",
    location: [28.0339, 1.6596],
    medals: 17
  },
  {
    name: "Argentina",
    location: [-38.4161, -63.6167],
    medals: 274
  },
  {
    name: "Armenia",
    location: [40.0691, 45.0382],
    medals: 16
  },
  {
    name: "Australasia",
    location: [-41.4545, 145.9707],
    medals: 29
  },
  {
    name: "Australia",
    location: [-25.2744, 133.7751],
    medals: 1320
  },
  {
    name: "Austria",
    location: [47.5162, 14.5501],
    medals: 450
  },
  {
    name: "Azerbaijan",
    location: [40.1431, 47.5769],
    medals: 44
  },
  {
    name: "Bahamas",
    location: [25.0343, -77.3963],
    medals: 40
  },
  {
    name: "Bahrain",
    location: [26.0667, 50.5577],
    medals: 3
  },
  {
    name: "Barbados",
    location: [13.1939, -59.5432],
    medals: 1
  },
  {
    name: "Belarus",
    location: [53.7098, 27.9534],
    medals: 139
  },
  {
    name: "Belgium",
    location: [50.5039, 4.4699],
    medals: 468
  },
  {
    name: "Bermuda",
    location: [32.3078, -64.7505],
    medals: 1
  },
  {
    name: "Bohemia",
    location: [49.8175, 15.4730],
    medals: 12
  },
  {
    name: "Botswana",
    location: [-22.3285, 24.6849],
    medals: 1
  },
  {
    name: "Brazil",
    location: [-14.2350, -51.9253],
    medals: 475
  },
  {
    name: "Bulgaria",
    location: [42.7339, 25.4858],
    medals: 342
  },
  {
    name: "Burundi",
    location: [-3.3731, 29.9189],
    medals: 2
  },
  {
    name: "Cameroon",
    location: [7.3697, 12.3547],
    medals: 22
  },
  {
    name: "Canada",
    location: [56.1304, -106.3468],
    medals: 1352
  },
  {
    name: "Chile",
    location: [-35.6751, -71.5430],
    medals: 32
  },
  {
    name: "China",
    location: [35.8617, 104.1954],
    medals: 989
  },
  {
    name: "Taiwan",
    location: [23.6978, 120.9605],
    medals: 49
  },
  {
    name: "Colombia",
    location: [4.5709, -74.2973],
    medals: 28
  },
  {
    name: "Costa Rica",
    location: [4.5709, -74.2973],
    medals: 4
  },
  {
    name: "Cote d'Ivoire",
    location: [7.5400, -5.5471],
    medals: 3
  },
  {
    name: "Croatia",
    location: [45.1000, 15.2000],
    medals: 149
  },
  {
    name: "Cuba",
    location: [21.5218, -77.7812],
    medals: 409
  },
  {
    name: "Cyprus",
    location: [35.1264, 33.4299],
    medals: 1
  },
  {
    name: "Czech Republic",
    location: [49.8175, 15.4730],
    medals: 144
  },
  {
    name: "Czechoslovakia",
    location: [50.0755, 14.4378],
    medals: 488
  },
  {
    name: "Denmark",
    location: [56.2639, 9.5018],
    medals: 2165
  },
  {
    name: "Djibouti",
    location: [11.8251, 42.5903],
    medals: 1
  },
  {
    name: "Dominican Republic",
    location: [18.7357, -70.1627],
    medals: 7
  },
  {
    name: "East Germany",
    location: [52.5074, 13.3904],
    medals: 1005
  },
  {
    name: "Ecuador",
    location: [52.5074, 13.3904],
    medals: 2
  },
  {
    name: "Egypt",
    location: [30.0444, 31.2357],
    medals: 27
  },
  {
    name: "Eritrea",
    location: [15.3229, 38.9251],
    medals: 1
  },
  {
    name: "Estonia",
    location: [59.4370, 24.7536],
    medals: 50
  },
  {
    name: "Ethiopia",
    location: [8.9806, 38.7578],
    medals: 53
  },
  {
    name: "Fiji",
    location: [-17.7134, 178.0650],
    medals: 13
  },
  {
    name: "Finland",
    location: [60.1664, 24.9572],
    medals: 900
  },
  {
    name: "France",
    location: [48.8479, 2.3552],
    medals: 1777
  },
  {
    name: "Gabon",
    location: [0.4173, 9.4669],
    medals: 1
  },
  {
    name: "Georgia",
    location: [41.7151, 44.8271],
    medals: 32
  },
  {
    name: "Germany",
    location: [51.1657, 10.4515],
    medals: 2165
  },
  {
    name: "Ghana",
    location: [5.5956, -0.2007],
    medals: 23
  },
  {
    name: "Great Britain",
    location: [51.5073, -0.1276],
    medals: 2068
  },
  {
    name: "Greece",
    location: [37.9777, 23.7352],
    medals: 255
  },
  {
    name: "Grenada",
    location: [12.0550, -61.7494],
    medals: 2
  },
  {
    name: "Guatemala",
    location: [14.6358, -90.5114],
    medals: 1
  },
  {
    name: "Guatemala",
    location: [14.6358, -90.5114],
    medals: 1
  },
  {
    name: "Guyana",
    location: [6.8121, -58.1460],
    medals: 1
  },
  {
    name: "Haiti",
    location: [18.6515, -72.2313],
    medals: 7
  },
  {
    name: "Hong Kong",
    location: [22.4004, 114.1662],
    medals: 4
  },
  {
    name: "Hungary",
    location: [47.497900, 19.040200],
    medals: 1135
  },
  {
    name: "Iceland",
    location: [64.1453, -21.9355],
    medals: 17
  },
  {
    name: "India",
    location: [28.6139, 77.2090],
    medals: 197
  },
  {
    name: "Individual Olympic Athletes",
    location: [-82.8628, 135.0000],
    medals: 5
  },
  {
    name: "Indonesia",
    location: [-6.1771, 106.8425],
    medals: 41
  },
  {
    name: "Iran",
    location: [35.6915, 51.3807],
    medals: 68
  },
  {
    name: "Iraq",
    location: [33.3156, 44.3671],
    medals: 1
  },
  {
    name: "Ireland",
    location: [53.3500, -6.2579],
    medals: 35
  },
  {
    name: "Israel",
    location: [31.7776, 35.2355],
    medals: 9
  },
  {
    name: "Italy",
    location: [41.9022, 12.5016],
    medals: 1637
  },
  {
    name: "Jamaica",
    location: [18.0120, -76.7718],
    medals: 157
  },
  {
    name: "Japan",
    location: [35.7899, 139.7407],
    medals: 913
  },
  {
    name: "Jordan",
    location: [31.9710, 35.9199],
    medals: 1
  },
  {
    name: "Jordan",
    location: [31.9710, 35.9199],
    medals: 1
  },
  {
    name: "Kazakhstan",
    location: [51.2438, 71.6393],
    medals: 77
  },
  {
    name: "Kenya",
    location: [-1.2934, 36.8278],
    medals: 106
  },
  {
    name: "Kosovo",
    location: [42.6651, 21.1631],
    medals: 1
  },
  {
    name: "Kuwait",
    location: [29.3765, 47.9737],
    medals: 2
  },
  {
    name: "Kyrgyzstan",
    location: [42.9177, 74.4871],
    medals: 3
  },
  {
    name: "Latvia",
    location: [56.9915, 24.0885],
    medals: 35
  },
  {
    name: "Liechtenstein",
    location: [47.1660, 9.5554],
    medals: 9
  },
 {
    name: "Lithuania",
    location: [55.1694, 23.8813],
    medals: 61
  },
 {
    name: "Luxembourg",
    location: [49.6116, 6.1319],
    medals: 8
  },
 {
    name: "Macedonia",
    location: [41.6086, 21.7453],
    medals: 1
  },
 {
    name: "Malaysia",
    location: [4.2105, 101.9758],
    medals: 16
  },
 {
    name: "Mauritius",
    location: [20.3484, 57.5522],
    medals: 1
  },
 {
    name: "Mexico",
    location: [23.6345, 102.5528],
    medals: 110
  },
 {
    name: "Moldova",
    location: [47.4116, 28.3699],
    medals: 8
  },
 {
    name: "Monaco",
    location: [43.7384, 7.4246],
    medals: 1
  },
 {
    name: "Mongolia",
    location: [46.8625, 103.8467],
    medals: 26
  },
 {
    name: "Montenegro",
    location: [42.7087, 19.3744],
    medals: 14
  },
 {
    name: "Morocco",
    location: [31.7917, 7.0926],
    medals: 23
  },
 {
    name: "Mozambique",
    location: [18.6657, 35.5296],
    medals: 2
  },
 {
    name: "Namibia",
    location: [22.9576, 18.4904],
    medals: 4
  },
 {
    name: "Nepal",
    location: [28.3949, 84.1240],
    medals: 1
  },
 {
    name: "Netherlands",
    location: [52.1326, 5.2913],
    medals: 1041
  },
 {
    name: "Netherlands Antilles",
    location: [12.2260, -69.0600],
    medals: 1
  },
 {
    name: "New Zealand",
    location: [-36.8485, 174.7633],
    medals: 228
  },
 {
    name: "Niger",
    location: [17.6078, 8.0817],
    medals: 2
  },
 {
    name: "Nigeria",
    location: [9.0820, 8.6753],
    medals: 99
  },
 {
    name: "North Korea",
    location: [40.3399, 127.5101],
    medals: 67
  },
 {
    name: "Norway",
    location: [60.4720, 8.4689],
    medals: 1032
  },
 {
    name: "Pakistan",
    location: [30.3753, 69.3451],
    medals: 121
  },
 {
    name: "Panama",
    location: [8.5380, 80.7821],
    medals: 3
  },
 {
    name: "Paraguay",
    location: [23.4425, 58.4438],
    medals: 17
  },
 {
    name: "Peru",
    location: [9.1900, 75.0152],
    medals: 15
  },
 {
    name: "Philippines",
    location: [12.8797, 121.7740],
    medals: 10
  },
 {
    name: "Poland",
    location: [51.9194, 19.1451],
    medals: 565
  },
 {
    name: "Portugal",
    location: [39.3999, 8.2245],
    medals: 41
  },
 {
    name: "Puerto Rico",
    location: [18.2208, 66.5901],
    medals: 9
  },
 {
    name: "Qatar",
    location: [25.3548, 51.1839],
    medals: 61
  },
 {
    name: "Romania",
    location: [45.9432, 24.9668],
    medals: 653
  },
 {
    name: "Russia",
    location: [61.5240, 105.3188],
    medals: 3945
  },
 {
    name: "Saudi Arabia",
    location: [23.8859, 45.0792],
    medals: 6
  },
 {
    name: "Senegal",
    location: [14.4974, 14.4524],
    medals: 1
  },
 {
    name: "Serbia",
    location: [44.0165, 21.0059],
    medals: 85
  },
 {
    name: "Singapore",
    location: [1.3521, 103.8198],
    medals: 9
  },
 {
    name: "Slovakia",
    location: [48.6690, 19.6990],
    medals: 47
  },
 {
    name: "Slovenia",
    location: [46.1512, 14.9955],
    medals: 48
  },
 {
    name: "South Africa",
    location: [30.5595, 22.9375],
    medals: 131
  },
 {
    name: "South Korea",
    location: [35.9078, 127.7669],
    medals: 638
  },
 {
    name: "Spain",
    location: [40.4637, 3.7492],
    medals: 489
  },
 {
    name: "Sri Lanka",
    location: [7.8731, 80.7713],
    medals: 2
  },
 {
    name: "Sudan",
    location: [12.8628, 30.2176],
    medals: 1
  },
 {
    name: "Suriname",
    location: [3.9193, 56.0278],
    medals: 2
  },
 {
    name: "Sweden",
    location: [60.1282, 18.6435],
    medals: 1533
  },
 {
    name: "Switzerland",
    location: [46.8182, 8.2275],
    medals: 686
  },
 {
    name: "Syria",
    location: [34.8021, 38.9968],
    medals: 3
  },
 {
    name: "Tajikistan",
    location: [38.8610, 71.2761],
    medals: 4
  },
 {
    name: "Tanzania",
    location: [6.3690, 34.8888],
    medals: 2
  },
 {
    name: "Thailand",
    location: [15.8700, 100.9925],
    medals: 30
  },
 {
    name: "Togo",
    location: [8.6195, 0.8248],
    medals: 1
  },
 {
    name: "Tonga",
    location: [21.1790, 175.1982],
    medals: 1
  },
 {
    name: "Trinidad and Tobago",
    location: [10.6918, 61.2225],
    medals: 32
  },
 {
    name: "Tunisia",
    location: [33.8869, 9.5375],
    medals: 13
  },
 {
    name: "Turkey",
    location: [38.9637, 35.2433],
    medals: 95
  },
 {
    name: "Uganda",
    location: [1.3733, 32.2903],
    medals: 7
  },
 {
    name: "Ukraine",
    location: [48.3794, 31.1656],
    medals: 199
  },
 {
    name: "United Arab Emirates",
    location: [23.4241, 53.8478],
    medals: 2
  },
 {
    name: "United States",
    location: [38.9071, -77.0368],
    medals: 5637
  },
 {
    name: "U.S. Virgin Islands",
    location: [18.3358, 64.8963],
    medals: 1
  },
 {
    name: "Uruguay",
    location: [32.5228, 55.7658],
    medals: 63
  },
 {
    name: "Uzbekistan",
    location: [41.3775, 64.5853],
    medals: 34
  },
 {
    name: "Venezuela",
    location: [6.4238, 66.5897],
    medals: 15
  },
 {
    name: "Vietnam",
    location: [14.0583, 108.2772],
    medals: 4
  },
 {
    name: "Zambia",
    location: [13.1339, 27.8493],
    medals: 2
  },
 {
    name: "Zimbabwe",
    location: [-17.8260, 31.0383],
    medals: 22
  }
];


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (countries[i].medals > 200) {
    color = "yellow";
  }
  else if (countries[i].medals > 100) {
    color = "blue";
  }
  else if (countries[i].medals > 90) {
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: countries[i].medals * 200
  }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Medals: " + countries[i].medals + "</h3>").addTo(myMap);
}
