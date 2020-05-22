/////////////////////////////////////////
// Dashboard 2 JS
$(function () {
    Apex.grid = {
        padding: {
            right: 0,
            left: 0
        }
    }

    Apex.dataLabels = {
        enabled: false
    }

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

    // data for the sparklines that appear below header area
    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

    new ApexCharts(document.querySelector(".spark-1"), {
        chart: {
            id: 'sparkline1',
            group: 'sparklines',
            type: 'area',
            height: 160,
            foreColor: '#808080',
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
            name: 'Engagement ratio',
            data: randomizeArray(sparklineData)
        }],
        labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
        yaxis: {
            min: 0
        },
        xaxis: {
            type: 'datetime',
        },
        title: {
            text: '2.93%',
            style: {
                fontSize: '24px',
                cssClass: 'text-dark'
            }
        },
        subtitle: {
            text: 'Engagement ratio',

            style: {
                fontSize: '14px',
                cssClass: 'text-dark'
            }
        }
    }).render();

    new ApexCharts(document.querySelector(".spark-2"), {
        chart: {
            id: 'sparkline2',
            group: 'sparklines',
            type: 'area',
            height: 160,
            sparkline: {
                enabled: true
            },
            foreColor: '#808080',
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: 'Average likes per post',
            data: randomizeArray(sparklineData)
        }],
        labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
        yaxis: {
            min: 0
        },
        xaxis: {
            type: 'datetime',
        },
        title: {
            text: '154.37',
            style: {
                fontSize: '24px',
                cssClass: 'text-dark'
            }
        },
        subtitle: {
            text: 'Average likes per post',
            style: {
                fontSize: '14px',
                cssClass: 'text-dark'
            }
        }
    }).render();


    new ApexCharts(document.querySelector(".spark-3"), {
        chart: {
            id: 'sparkline3',
            group: 'sparklines',
            type: 'area',
            height: 160,
            sparkline: {
                enabled: true
            },
            foreColor: '#808080',
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: 'Average comments per post',
            data: randomizeArray(sparklineData)
        }],
        labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            min: 0
        },
        title: {
            text: '5.38',
            style: {
                fontSize: '24px',
                cssClass: 'text-dark'
            }
        },
        subtitle: {
            text: 'Average comments per post',
            style: {
                fontSize: '14px',
                cssClass: 'text-dark'
            }
        }
    }).render();

    new ApexCharts(document.querySelector(".spark-4"), {
        chart: {
            height: 400,
            type: 'bar',
            parentHeightOffset: 0,
            fontFamily: 'Poppins, sans-serif',
            toolbar: {
                show: false,
            },
            foreColor: '#808080',
        },
        colors: ['#0080ff', '#F7AE1D'],
        grid: {
            borderColor: '#c7d2dd',
            strokeDashArray: 5,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '15px',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'In Progress',
            data: [40, 28, 47, 22, 34, 25]
        }, {
            name: 'Complete',
            data: [30, 20, 37, 10, 28, 11]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: {
                style: {
                    colors: ['#353535'],
                    fontSize: '16px',
                },
            },
            axisBorder: {
                color: '#8fa6bc',
            }
        },
        yaxis: {
            title: {
                text: ''
            },
            labels: {
                style: {
                    colors: '#353535',
                    fontSize: '16px',
                },
            },
            axisBorder: {
                color: '#f00',
            }
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            style: {
                fontSize: '15px',
                fontFamily: 'Poppins, sans-serif',
            },
            y: {
                formatter: function (val) {
                    return val
                }
            }
        }
    }).render();
});