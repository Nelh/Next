/////////////////////////////////////////
// Dashboard 3 JS
$(function () {
    new ApexCharts(document.querySelector(".chart"), {
        series: [80],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#1b00ff'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    }).render();

    new ApexCharts(document.querySelector(".chart-2"), {
        series: [70],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 1,
                gradientToColors: ['#66c6ba'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    }).render();

    new ApexCharts(document.querySelector(".chart-3"), {
        series: [75],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#f56767'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    }).render();

    new ApexCharts(document.querySelector(".chart-4"), {
        series: [85],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#226F54'],
                inverseColors: false,
                opacityFrom: [1, 0.5],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    }).render();

    new ApexCharts(document.querySelector(".chart-5"), {
        series: [{
            name: 'series1',
            data: [30, 50, 70, 65, 80, 90]
        }],
        chart: {
            height: 110,
            type: 'area',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
        tooltip: {
            x: {
                show: false,
                format: 'dd/MM/yy HH:mm'
            },
        },
    }).render();

    new ApexCharts(document.querySelector(".chart-6"), {
        series: [{
            name: 'series1',
            data: [150, 650, 450, 650, 350, 480, 900]
        }],
        chart: {
            height: 110,
            type: 'line',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
        tooltip: {
            x: {
                show: false,
                format: 'dd/MM/yy HH:mm'
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [{
                        offset: 0,
                        color: "#EB656F",
                        opacity: 1
                    },
                    {
                        offset: 20,
                        color: "#FAD375",
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: "#61DBC3",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "#95DA74",
                        opacity: 1
                    }
                ]
            }
        },
    }).render();

    new ApexCharts(document.querySelector(".chart-7"), {
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        chart: {
            height: 110,
            type: 'bar',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            events: {
                click: function (chart, w, e) {}
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '20px',
                distributed: true,
                endingShape: 'rounded',
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
    }).render();

    new ApexCharts(document.querySelector(".chart-8"), {
        series: [{
            name: 'series1',
            data: [41, 50, 38, 61, 42, 70, 100]
        }, {
            name: 'series2',
            data: [21, 42, 55, 32, 34, 92, 41]
        }],
        chart: {
            height: 110,
            type: 'area',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            curve: 'smooth'
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
        tooltip: {
            x: {
                show: false,
                format: 'dd/MM/yy HH:mm'
            },
        },
    }).render();

    new ApexCharts(document.querySelector(".chart-9"), {

        chart: {
            height: 400,
            type: 'bar',
            parentHeightOffset: 0,
            fontFamily: 'Poppins, sans-serif',
            toolbar: {
                show: false,
            },
        },
        colors: ['#EB4738', '#F7AE1D'],
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
        legend: {
            horizontalAlign: 'right',
            position: 'top',
            fontSize: '16px',
            offsetY: 0,
            labels: {
                colors: '#353535',
            },
            markers: {
                width: 10,
                height: 10,
                radius: 15,
            },
            itemMargin: {
                vertical: 0
            },
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

    new ApexCharts(document.querySelector(".chart-10"), {
        series: [73],
        chart: {
            height: 350,
            type: 'radialBar',
            offsetY: 0
        },
        colors: ['#0B132B', '#222222'],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Achieve Goals'],
    }).render();

    new ApexCharts(document.querySelector(".chart-11"), {
        series: [95],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#0080ff'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    }).render();

    new ApexCharts(document.querySelector(".chart-12"), {
        series: [15],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#f56767'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    }).render();
});