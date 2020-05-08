/////////////////////////////////////////
// Dashboard 1 JS
$(function () { 
    //////////////////////////////
    // WORLDWIDE VECTOR MAPS CONFIG
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#cce6ff'
            },
            selected: {
                fill: '#444'
            }
        },
        series: {
            regions: [{
                values: {
                    'CN': '#0080ff',
                    'US': '#0080ff',
                    'ZA': '#0080ff',
                    'FR': '#0080ff',
                    'DE': '#0080ff',
                    'BR': '#0080ff',
                },
                attribute: 'fill'
            }]
        },
        zoomOnScroll: false,
        markerStyle: {
            initial: {
                fill: '#0080ff',
                stroke: '#0080ff'
            }
        },
        markers: [
            {latLng: [35, 105], name: '10% Revenue'},
            {latLng: [38, -97], name: '40% revenue'},
            {latLng: [-29, 24], name: '75% Revenue'},
            {latLng: [46, 2], name: '25% Revenue'},
            {latLng: [51, 9], name: '30% Revenue'},
            {latLng: [-10, -55], name: '19% Revenue'},
        ]
    });

    ///////////////////////////////
    // SA VECTOR MAPS CONFIG
    $('#sa-map').vectorMap({
        map: 'za_mill',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#cce6ff'
            },
            selected: {
                fill: '#444'
            }
        },series: {
            regions: [{
                values: {
                    'ZA-WC': '#0080ff',
                },
                attribute: 'fill'
            }]
        },
        zoomOnScroll: false,
    });

    ////////////////////////////////////////////////////////////
    // Charts & graph Charts js
    // Global Options
    var options = {
        legend: false,
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        }
    };
    ///// Line Graph
    new Chart(document.querySelector("#line-chart-1"), {
        type: 'line',
        data: {
            labels: ["WC", "EC", "FS", "NC", "LP", "MP", "NL", "NW", "GT"],
            datasets: [
                {
                    label: "South Africa",
                    fill: false,
                    lineTension: 0,
                    borderColor: "red",
                    pointBorderColor: "red",
                    pointBackgroundColor: "white",
                    pointBorderWidth: 2,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: "red",
                    pointHoverBorderColor: "#ff000033",
                    pointHoverBorderWidth: 24,
                    pointRadius: 4,
                    pointHitRadius: 16,
                    data: [65, 59, 80, 91, 56, 55, 40, ,70,55,30,78],
                    spanGaps: true
                }
            ]
        },
        options: options
    });

    ///// Bar Graph
    new Chart(document.querySelector("#line-chart-2"), {
        type: 'bar',
        data: {
            labels: ["WC", "EC", "FS", "NC", "LP", "MP", "NL", "NW", "GT"],
            datasets: [
                {
                    label: "UFO Sightings",
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: "#ff9900",
                    borderColor: "#ff9900", // The main line color
                    borderCapStyle: 'square',
                    pointBorderColor: "white",
                    pointBackgroundColor: "#ff9900",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "yellow",
                    pointHoverBorderColor: "#ff9900",
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 10,
                    data: [33, 35, 45, 48, 57, 60, 120, 230, 300],
                    spanGaps: true
                }
            ]
        },
        options: options
    });
    
    ///// Radar Graph
    new Chart(document.querySelector("#line-chart-3"), {
        type: 'radar',
        data: {
            labels: ["WC", "EC", "FS", "NC", "LP", "MP", "NL", "NW", "GT"],
            datasets: [
                {
                    label: '5+',
                    data: [85, 23, 50, 47, 13, 12, 17, 6, 15, 17, 18, 23, 26 ],
                    backgroundColor: 'purple',
                    borderWidth: 1
                },
                {
                    label: '4+',
                    data: [87, 22, 56, 57, 26, 22, 25, 4, 11, 7, 13, 15],
                    backgroundColor: '#66ff33',
                    borderWidth: 1
                },
                {
                    label: '3+',
                    data: [91, 26, 65, 57, 24, 22, 27,  23, 7, 12, 10],
                    backgroundColor: 'yellow',
                    borderWidth: 1
                },
                {
                    label: '2+',
                    data: [96, 26, 58, 65, 38, 24, 13, 15, 17, 27],
                    backgroundColor: 'orange',
                    borderWidth: 1
                },
                {
                    label: 'New',
                    data: [136, 41, 143, 83, 85, 43, 25, 35, 49, 34, 123, 165],
                    backgroundColor: 'red',
                    borderWidth: 1
                }
            ]
        },
        options: options
    });

    new Chart(document.querySelector("#line-chart-4"), {
        type: 'bar',
        data: {
            labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
            datasets: [
                {
                    data: [4, 1, 9, 7, 9, 11, 0, 13, 20, 0, 3, 2],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [2, 2, 9, 8, 8, 12, 0, 12, 21, 0, 2, 0],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [4, 3, 8, 9, 10, 9, 0, 13, 20, 0, 0, 0],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [5, 4, 6, 10, 11, 12, 0, 14, 14, 0, 1 ,3],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [4, 5, 8, 14, 12, 13, 0, 11, 27, 0, 2, 1],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [3, 6, 6, 12, 10, 11, 0, 12, 19, 0, 2, 1],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [4, 5, 7, 11, 9, 11, 0, 16, 30, 0, 0, 23],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [7, 6, 8, 10, 7, 12, 0, 15, 17, 0, 12, 2],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [6, 5, 9, 11, 12, 11, 0, 14, 18, 0, 0],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [5, 9, 10, 9, 11, 14, 11, 13, 19, 29, 26],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [4, 8, 12, 8, 10, 12, 16, 21, 29, 25, 26],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [5, 6, 8, 11, 9, 12, 15, 15, 20, 22, 22, 12],
                    borderColor: "#fff",
                    backgroundColor: "#0080ff"
                },
                {
                    data: [3, 4, 6, 9, 8, 12, 13, 14, 32, 33, 35, 12],
                    backgroundColor: 'red',
                    borderWidth: 1
                }
            ]
        },
        options: options
    });

    ////////////////////////////////////////////////////////////
    // Charts & graph Morris js
    // Global Data
    var data = [
        { y: '2014', a: 50,  b: 90},
        { y: '2015', a: 65,  b: 75},
        { y: '2016', a: 50,  b: 50},
        { y: '2017', a: 75,  b: 60},
        { y: '2018', a: 80,  b: 65},
        { y: '2019', a: 90,  b: 70},
        { y: '2020', a: 100, b: 75},
        { y: '2021', a: 115, b: 75},
        { y: '2022', a: 120, b: 85},
        { y: '2023', a: 145, b: 85},
        { y: '2024', a: 160, b: 95}
    ];

    Morris.Bar({
        element: 'bar-chart',
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#007bff','#1c2a36'],
        barColors: ['#007bff','#1c2a36'],
        lineWidth: '3px',
        resize: true,
        redraw: true
    });

    Morris.Line({
        element: 'hero-graph',
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.6,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        redraw: true,
        pointFillColors:['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors:['#007bff','red']
    });
    
    Morris.Donut({
        element: 'hero-donut',
        data: [
            {label: 'South-Africa', value: 75, labelColor: '#007bff'},
            {label: 'USA', value: 40, labelColor: '#b6d6ff' },
            {label: 'FRANCE', value: 25, labelColor: '#1a7dff'},
            {label: 'GERMANY', value: 30, labelColor: '#b6d6ff' },
            {label: 'BRAZIL', value: 19, labelColor: '#b6d6ff' },
            {label: 'CHINA', value: 10, labelColor: '#b6d6ff' }
        ],
        labelColor: '#444',
        formatter: function (x) { return x + "%" }
    });
});
