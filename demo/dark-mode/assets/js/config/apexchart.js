/////////////////////////////////////
///// Apex js  
$(function () {
    // Serie of Data
    var series={monthDataSeries1:{prices:[8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9340.85],dates:["13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017","29 Nov 2017","30 Nov 2017","01 Dec 2017","04 Dec 2017","05 Dec 2017","06 Dec 2017","07 Dec 2017","08 Dec 2017"]},monthDataSeries2:{prices:[8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9040.85,8340.7,8165.5,8122.9,8107.85,8128],dates:["13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017","29 Nov 2017","30 Nov 2017","01 Dec 2017","04 Dec 2017","05 Dec 2017","06 Dec 2017","07 Dec 2017","08 Dec 2017"]},monthDataSeries3:{prices:[7114.25,7126.6,7116.95,7203.7,7233.75,7451,7381.15,7348.95,7347.75,7311.25,7266.4,7253.25,7215.45,7266.35,7315.25,7237.2,7191.4,7238.95,7222.6,7217.9,7359.3,7371.55,7371.15,7469.2,7429.25,7434.65,7451.1,7475.25,7566.25,7556.8,7525.55,7555.45,7560.9,7490.7,7527.6,7551.9,7514.85,7577.95,7592.3,7621.95,7707.95,7859.1,7815.7,7739,7778.7,7839.45,7756.45,7669.2,7580.45,7452.85,7617.25,7701.6,7606.8,7620.05,7513.85,7498.45,7575.45,7601.95,7589.1,7525.85,7569.5,7702.5,7812.7,7803.75,7816.3,7851.15,7912.2,7972.8,8145,8161.1,8121.05,8071.25,8088.2,8154.45,8148.3,8122.05,8132.65,8074.55,7952.8,7885.55,7733.9,7897.15,7973.15,7888.5,7842.8,7838.4,7909.85,7892.75,7897.75,7820.05,7904.4,7872.2,7847.5,7849.55,7789.6,7736.35,7819.4,7875.35,7871.8,8076.5,8114.8,8193.55,8217.1,8235.05,8215.3,8216.4,8301.55,8235.25,8229.75,8201.95,8164.95,8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2],dates:["02 Jun 2017","05 Jun 2017","06 Jun 2017","07 Jun 2017","08 Jun 2017","09 Jun 2017","12 Jun 2017","13 Jun 2017","14 Jun 2017","15 Jun 2017","16 Jun 2017","19 Jun 2017","20 Jun 2017","21 Jun 2017","22 Jun 2017","23 Jun 2017","27 Jun 2017","28 Jun 2017","29 Jun 2017","30 Jun 2017","03 Jul 2017","04 Jul 2017","05 Jul 2017","06 Jul 2017","07 Jul 2017","10 Jul 2017","11 Jul 2017","12 Jul 2017","13 Jul 2017","14 Jul 2017","17 Jul 2017","18 Jul 2017","19 Jul 2017","20 Jul 2017","21 Jul 2017","24 Jul 2017","25 Jul 2017","26 Jul 2017","27 Jul 2017","28 Jul 2017","31 Jul 2017","01 Aug 2017","02 Aug 2017","03 Aug 2017","04 Aug 2017","07 Aug 2017","08 Aug 2017","09 Aug 2017","10 Aug 2017","11 Aug 2017","14 Aug 2017","16 Aug 2017","17 Aug 2017","18 Aug 2017","21 Aug 2017","22 Aug 2017","23 Aug 2017","24 Aug 2017","28 Aug 2017","29 Aug 2017","30 Aug 2017","31 Aug 2017","01 Sep 2017","04 Sep 2017","05 Sep 2017","06 Sep 2017","07 Sep 2017","08 Sep 2017","11 Sep 2017","12 Sep 2017","13 Sep 2017","14 Sep 2017","15 Sep 2017","18 Sep 2017","19 Sep 2017","20 Sep 2017","21 Sep 2017","22 Sep 2017","25 Sep 2017","26 Sep 2017","27 Sep 2017","28 Sep 2017","29 Sep 2017","03 Oct 2017","04 Oct 2017","05 Oct 2017","06 Oct 2017","09 Oct 2017","10 Oct 2017","11 Oct 2017","12 Oct 2017","13 Oct 2017","16 Oct 2017","17 Oct 2017","18 Oct 2017","19 Oct 2017","23 Oct 2017","24 Oct 2017","25 Oct 2017","26 Oct 2017","27 Oct 2017","30 Oct 2017","31 Oct 2017","01 Nov 2017","02 Nov 2017","03 Nov 2017","06 Nov 2017","07 Nov 2017","08 Nov 2017","09 Nov 2017","10 Nov 2017","13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017"]}};

    window.Apex = {
        dataLabels: {
            enabled: false
        }
    };

    new ApexCharts(document.querySelector(".spark-0"), {
        annotations: {
            yaxis: [{
                y: 8200,
                borderColor: "#00E396",
                label: {
                    borderColor: "#00E396",
                    style: {
                        color: "#fff",
                        background: "#00E396"
                    },
                    text: "Y Axis Annotation"
                }
            }],
            xaxis: [{
                    // in a datetime series, the x value should be a timestamp, just like it is generated below
                    x: new Date("11/17/2017").getTime(),
                    strokeDashArray: 0,
                    borderColor: "#775DD0",
                    label: {
                        borderColor: "#775DD0",
                        style: {
                            color: "#fff",
                            background: "#775DD0"
                        },
                        text: "X Axis Anno Vertical"
                    }
                },
                {
                    x: new Date("03 Dec 2017").getTime(),
                    borderColor: "#FEB019",
                    label: {
                        borderColor: "#FEB019",
                        style: {
                            color: "#fff",
                            background: "#FEB019"
                        },
                        orientation: "horizontal",
                        text: "X Axis Anno Horizonal"
                    }
                }
            ],
            points: [{
                x: new Date("27 Nov 2017").getTime(),
                y: 8500.9,
                marker: {
                    size: 6,
                    fillColor: "#fff",
                    strokeColor: "#2698FF",
                    radius: 2
                },
                label: {
                    borderColor: "#FF4560",
                    offsetY: 0,
                    style: {
                        color: "#fff",
                        background: "#FF4560"
                    },

                    text: "Point Annotation (XY)"
                }
            }]
        },
        chart: {
            height: 380,
            type: "line",
            id: "areachart-2",
            foreColor: '#808080'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "straight"
        },
        series: [{
            data: series.monthDataSeries1.prices
        }],
        title: {
            text: "Line with Annotations",
            align: "left"
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
            type: "datetime"
        }
    }).render();

    new ApexCharts(document.querySelector(".spark-1"), {
        chart: {
            height: 380,
            width: "100%",
            type: "line",
            foreColor: '#808080'
        },
        series: [{
            name: "Series 1",
            data: [
                [1, 34],
                [3.8, 43],
                [5, 31],
                [10, 43],
                [13, 33],
                [15, 43],
                [18, 33],
                [20, 52]
            ]
        }],
        xaxis: {
            type: 'numeric'
        },
        tooltip: {
            x: {
                formatter: function (val) {
                    return val.toFixed(1);
                }
            }
        }
    }).render();

    new ApexCharts(document.querySelector(".spark-2"), {
        chart: {
            height: 350,
            type: "radialBar",
            foreColor: '#808080'
          },
          plotOptions: {
            radialBar: {
              offsetY: -10,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: undefined
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          colors: ["#1ab7ea", "#0084ff", "#39539E"],
          series: [76, 67, 61],
          labels: ["Impactable", "Managed", "Compliant"],
          legend: {
            show: true,
            floating: true,
            fontSize: "16px",
            position: "left",
            offsetX: 20,
            offsetY: 20,
            labels: {
              useSeriesColors: true
            },
            markers: {
              size: 0
            },
            formatter: function(seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
            },
            itemMargin: {
              horizontal: 1
            }
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  show: false
                }
              }
            }
          ]
    }).render();

    new ApexCharts(document.querySelector(".spark-3"), {
        chart: {
            width: "100%",
            height: 380,
            type: "bar",
            foreColor: '#808080'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ["#fff"]
        },
        series: [{
                data: [44, 55, 41, 64, 22, 43, 21]
            },
            {
                data: [53, 32, 33, 52, 13, 44, 32]
            }
        ],
        xaxis: {
            categories: [
                "South Africa",
                "USA",
                "Brazil",
                "Germany",
                "France",
                "Japan",
                "China"
            ]
        },
        legend: {
            position: "right",
            verticalAlign: "top",
            containerMargin: {
                left: 35,
                right: 60
            }
        },
        responsive: [{
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }]
    }).render();

    new ApexCharts(document.querySelector(".spark-4"), {
        chart: {
            id: 'sparkline1',
            type: 'line',
            height: 140,
            foreColor: '#808080',
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        series: [{
            name: 'purple',
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        },
        title: {
            text: '439',
            style: {
                fontSize: '26px'
            }
        },
        colors: ['#734CEA']
    }).render();

    new ApexCharts(document.querySelector(".spark-5"), {
        chart: {
            id: 'sparkline2',
            type: 'line',
            height: 140,
            foreColor: '#808080',
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        series: [{
            name: 'green',
            data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        },
        title: {
            text: '387',
            style: {
                fontSize: '26px'
            }
        },
        colors: ['#34bfa3']
    }).render();

    new ApexCharts(document.querySelector(".spark-6"), {
        chart: {
            id: 'sparkline3',
            type: 'line',
            height: 140,
            foreColor: '#808080',
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        series: [{
            name: 'red',
            data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        },
        colors: ['#f4516c'],
        title: {
            text: '577',
            style: {
                fontSize: '26px'
            }
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
        }
    }).render();

    new ApexCharts(document.querySelector(".spark-7"), {
        chart: {
            id: 'sparkline4',
            type: 'line',
            height: 140,
            foreColor: '#808080',
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        series: [{
            name: 'teal',
            data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        },
        colors: ['#00c5dc'],
        title: {
            text: '615',
            style: {
                fontSize: '26px'
            }
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
        }
    }).render();

    new ApexCharts(document.querySelector(".spark-8"), {
        chart: {
            height: 380,
            type: "line",
            foreColor: '#808080'
          },
          series: [
            {
              name: "Website Blog",
              type: "column",
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            },
            {
              name: "Social Media",
              type: "column",
              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }
          ],
          stroke: {
            width: [0, 4],
            curve: 'smooth'
          },
          title: {
            text: "Traffic Sources"
          },
          // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          labels: [
            "01 Jan 2001",
            "02 Jan 2001",
            "03 Jan 2001",
            "04 Jan 2001",
            "05 Jan 2001",
            "06 Jan 2001",
            "07 Jan 2001",
            "08 Jan 2001",
            "09 Jan 2001",
            "10 Jan 2001",
            "11 Jan 2001",
            "12 Jan 2001"
          ],
          xaxis: {
            type: "datetime"
          },
          yaxis: [
            {
              title: {
                text: "Website Blog"
              }
            },
            {
              opposite: true,
              title: {
                text: "Social Media"
              }
            }
          ]
    }).render();

    new ApexCharts(document.querySelector(".spark-9"), {
        chart: {
            type: 'area',
            foreColor: '#808080',
            toolbar: {
              show: false
            },
          },
        
          series: [
            {
              name: 'First Cash desk',
              data: [
                30, 10, 50, 80, 88
              ]
            },
                {
              name: 'First Cash desk',
              data: [
                52, 12, 30, 90, 48
              ]
            },
          ],
        
          xaxis: {
            show: false
          },
        
          grid: {
            show: false
          },
        
          tooltip: {
            enabled: false
          },
        
          fill : {
            type: 'gradient',
            gradient: {
              shadeIntensity: .3,
              opacityFrom: 0.4,
              opacityTo: 0,
              stops: [0, 100, 100]
            }
          },
        
          dataLabels: {
            enabled: false,
          }        
    }).render();

    new ApexCharts(document.querySelector('.spark-13'), {
        chart: {
            type: 'bar',
            height: 250,
            width: '100%',
            stacked: true,
            foreColor: '#808080',
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                },
                columnWidth: '75%',
                endingShape: 'rounded'
            }
        },
        colors: ["#00C5A4", '#F3F2FC'],
        series: [{
            name: "Sessions",
            data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23],
        }, {
            name: "Views",
            data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23],
        }],
        labels: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                show: false
            },
            labels: {
                show: false,
                style: {
                    fontSize: '14px'
                }
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                },
            },
            yaxis: {
                lines: {
                    show: false
                },
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            labels: {
                show: false
            },
        },
        legend: {
            floating: true,
            position: 'top',
            horizontalAlign: 'right',
            offsetY: -36
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        title: {
            text: 'Web Statistics',
            align: 'left',
        },
        subtitle: {
            text: 'Sessions and Views'
        },
        tooltip: {
            shared: true
        }
    }).render();


    new ApexCharts(document.querySelector('.spark-12'), {
        chart: {
            type: 'radialBar',
            height: 250,
            zoom: {
                enabled: false
            },
            foreColor: '#808080',
        },
        colors: ['#E91E63'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 0
                    }
                }
            }
        },
        series: [65],
        theme: {
            monochrome: {
                enabled: false
            }
        },
        title: {
            text: 'Bounce Rate',
            align: 'left'
        }
    }).render();


    new ApexCharts(document.querySelector('.spark-11'), {
        chart: {
            height: 250,
            type: 'donut',
            foreColor: '#808080'
        },
        plotOptions: {
            pie: {
                size: 76,
                donut: {
                    size: '70%',
                },
                dataLabels: {
                    enabled: false
                }
            }
        },
        colors: ['#775DD0', '#00C8E1', '#FFB900'],
        title: {
            text: 'Visitors Source'
        },
        series: [2, 7, 5],
        labels: ['Social Media', 'Blog', 'External'],
        legend: {
            show: false
        }
    }).render();

    new ApexCharts(document.querySelector('.spark-10'), {
        chart: {
            height: 421,
            type: 'area',
            stacked: true,
            offsetY: 39,
            zoom: {
                enabled: false
            },
            foreColor: '#808080'
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        stroke: {
            curve: 'straight'
        },
        colors: ["#3F51B5", '#2196F3'],
        series: [{
                name: "Adwords Views",
                data: [15, 26, 20, 33, 27, 43, 17, 26, 19]
            },
            {
                name: "Adwords Clicks",
                data: [33, 21, 42, 19, 32, 25, 36, 29, 49]
            }
        ],
        fill: {
            type: 'gradient',
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.9,
                opacityTo: 0.6,
                stops: [0, 100, 100, 100]
            }
        },
        title: {
            text: 'Visitor Insights',
            align: 'left',
            offsetY: -5,
            offsetX: 20
        },
        subtitle: {
            text: 'Adwords Statistics',
            offsetY: 30,
            offsetX: 20
        },
        markers: {
            size: 0,
            style: 'hollow',
            strokeWidth: 8,
            strokeColor: "#fff",
            strokeOpacity: 0.25,
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002', '01/21/2002', '01/22/2002', '01/23/2002'],
        xaxis: {
            type: 'datetime',
            tooltip: {
                enabled: false
            }
        },
        legend: {
            offsetY: -50,
            position: 'top',
            horizontalAlign: 'right'
        }
    }).render();
});