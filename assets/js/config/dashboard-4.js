$(function () {  

    var sparklineData_1 = [24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 54, 43];
    var sparklineData_2 = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

    var randomizeArray = function (arg) {
        var array = arg.slice();
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    $('.spark-1').sparkline(randomizeArray(sparklineData_1), {
        type: 'bar',
        height: '120',
        width: '250',
        barWidth: 9,
        barSpacing: 10,
        barColor: '#177dff'
    });
    
    new ApexCharts(document.querySelector(".spark-2"), {
        chart: {
            width: "100%",
            type: 'area',
            height: 160,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: 'Average likes per post',
            data: randomizeArray(sparklineData_2)
        }],
        labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
        yaxis: {
            min: 0
        },
        xaxis: {
            type: 'datetime',
        },
    }).render();
});