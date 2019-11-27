google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var options = {
    title: 'Percentage Giving',
    curveType: 'function',
    series: {
        0: {
            type: 'scatter'
        },
        // 1: {
        //     type: 'function'
        // }
    },
    legend: { position: 'bottom' },
    vAxis:  {
        maxValue: 60,
        minValue: 0,
        title: 'Pct'
    }

};

function drawChart() {
    var data2 = google.visualization.arrayToDataTable([
        ['Class','Pct','Avg'],
        ['1902',50,50],['1905',40,35.56],['1906',16.67,30],['1907',33.33,29.17],['1908',37.5,29.17],['1909',16.67,31.02],['1910',38.89,27.61],['1911',27.27,34.87],['1912',38.46,32.52],['1913',31.82,38.09],['1914',44,35.88],['1915',31.82,39.56],['1916',42.86,34.42],['1917',28.57,33.72],['1918',29.73,30.27],['1919',32.5,28.44],['1920',23.08,25.44],['1921',20.75,20.96],['1922',19.05,24.98],['1923',35.14,24.99],['1924',20.79,29.63],['1925',32.95,26.93],['1926',27.06,29.57],['1927',28.71,29.45],['1928',32.58,33.37],['1929',38.83,31.85],['1930',24.14,31.82],['1931',32.48,27.78],['1932',26.73,29.89],['1933',30.47,26.84],['1934',23.33,27.96],['1935',30.08,23.15],['1936',16.03,26.12],['1937',32.26,23.37],['1938',21.81,28.99],['1939',32.91,27.2],['1940',26.88,26.73],['1941',20.41,25.49],['1942',29.19,24.83],['1943',24.89,25.27],['1944',21.74,21.83],['1945',18.87,19.61],['1946',18.23,18.93],['1947',19.7,20.77],['1948',24.37,20.59],['1949',17.69,19.8],['1950',17.34,17.11],['1951',16.29,16.65],['1952',16.33,15.95],['1953',15.22,19.41],['1954',26.69,22.81],['1955',26.51,23.07],['1956',16.02,23.07],['1957',26.68,23.44],['1958',27.63,23.61],['1959',16.51,19.46],['1960',14.24,14.86],['1961',13.83,18.19],['1962',26.5,19.39],['1963',17.85,22.74],['1964',23.87,20.54],['1965',19.91,21.15],['1966',19.67,18.87],['1967',17.03,21.29],['1968',27.18,24.44],['1969',29.11,25.88],['1970',21.34,24.21],['1971',22.18,22.24],['1972',23.2,21.06],['1973',17.79,17.54],['1974',11.63,10.09],['1975',.86,4.21],['1976',.14,.14],['1978',.19,.19],
    ]);
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data2, options);
}

function loadData(yr){
    console.log(yr);
    var data2 = google.visualization.arrayToDataTable(data[yr]);
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data2, options);
};


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  loadData(this.value);
}

var up = true;

var interval = setInterval(function() {
    if (up){
        slider.stepUp();
    } else {
        slider.stepDown();
    }
//   slider.stepUp();
  slider.dispatchEvent(new Event('input'));
  if (up && slider.value == 2019) {up = false}
  if(!up && slider.value == 1975) {
      up = true;  
      clearInterval(interval);
  }
}, 100);

// (function(){
//     slider.dispatchEvent(new Event('input'));
// })();

function myStopFunction() {
    clearInterval(interval);
  }