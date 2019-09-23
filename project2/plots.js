
// Create the Traces
var countries = [
'FRA',
'USA',
'GRE',
'GBR',
'SWE',
'BEL',
'FRA',
'NED',
'USA',
'GER',
'FIN',
'AUS',
'ITA',
'JPN',
'MEX',
'CAN',
'RUS',
'KOR',
'ESP',
'AUS',
'CHN',
'BRA'
];

var conditional_medal_count = {
  x: data.avg_medal,
  y: data.avg_medal_when_host,
  name: "Data",
  mode: "markers",
  text: countries,
  hoverinfo: 'x'+'y'+'text',
  type: "scatter",
  marker: {
    color: "#2077b4",
    symbol: "circle"
  }};

var y_x = {
  x: [0,100],
  y: [0,100],
  mode: "lines",
  name: "y = x",
  type: "scatter"
};

var regression = {
  x:[0, 100],
  y:[11.47272, 182.6615],
  mode:"lines",
  name: "y = 1.7x + 11",
  type: "scatter"
};

// Create the data array for the plot
var data = [conditional_medal_count, y_x, regression];

// Define the plot layout
var layout = {
  title: "Countries Average Medal Count vs while Hosting",
  xaxis: { title: "Average Medal Count" },
  yaxis: { title: "Average Medal Count while Hosting" },
  hovermode:'closest'
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
