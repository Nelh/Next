////////////////////////////////////////////////////////////
// Charts & graph Morris
$(function () {
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

    Morris.Area({
        element: 'area-chart2',
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.6,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        pointFillColors:['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors:['gray','red']
    });

    Morris.Line({
        element: 'line-chart',
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.6,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        pointFillColors:['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors:['gray','red']
    });

    Morris.Bar({
        element: 'bar-chart',
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.6,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        pointFillColors:['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors:['gray','red']
    });

    Morris.Bar({
        element: 'stacked',
        data: data,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Total Income', 'Total Outcome'],
        fillOpacity: 0.6,
        hideHover: 'auto',
        behaveLikeLine: true,
        resize: true,
        stacked: true,
        pointFillColors:['#ffffff'],
        pointStrokeColors: ['black'],
        lineColors:['gray','red']
    });

    Morris.Donut({
        element: 'pie-chart',
        data: [
            {label: 'South-Africa', value: 75},
            {label: 'USA', value: 40 },
            {label: 'FRANCE', value: 25 },
            {label: 'GERMANY', value: 30 },
            {label: 'BRAZIL', value: 19 },
            {label: 'CHINA', value: 10 }
        ],
        labelColor: 'gray',
        formatter: function (x) { return x + "%" }
    });
});