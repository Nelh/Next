/////////////////////////////////////
// Chart Js
Chart.defaults.global.defaultFontColor = 'gray';

// label showing the date range of Data
let labelMonthyTurnover = ["Oct-17", "Nov-17", "Dec-17", "Jan-18", "Feb-18", "Mar-18", "Apr-18", "May-18", "Jun-18", "Jul-18", "Aug-18", "Sep-18", "Oct-18"];
let labelWeeklyData = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let labelcurrentMonth = ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"];

// 
var ctx = document.getElementById("myChart1");
new Chart(ctx, {
  type: 'bar',
  data: {
      labels: labelMonthyTurnover,
      datasets: [
          {
              label: 'Total',
              data: [26, 29, 32, 39, 26, 39, 25, 26, 24, 28, 23, 18, 21],
              backgroundColor: 'transparent',
              borderColor: '#794ACF',
              type: 'line',
              lineTension: 0,
              borderWidth: 4,
              radius: 0,
          },
          {
              label: 'Service',
              data: [12, 19, 13, 16, 12, 13, 14, 15, 16, 15, 19, 15, 13],
              backgroundColor: 'red',
              borderWidth: 1
          },
          {
              label: 'Retail',
              data: [8, 13, 9, 11, 8, 9, 9, 11, 10, 12, 12, 11, 10],
              backgroundColor: 'orange',
              borderWidth: 1
          }
      ]
    },
    options: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'end',
        labels: {
          usePointStyle: true,
          padding: 10
        }
      },
      responsive: true,
      animation: {
        easing: "easeInOutBack"
      },
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
          },
          ticks: {
            autoSkip: false,
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'transparent',
          }, 
          ticks: {
            beginAtZero:true,						
          }

        }]
      },
    }
});

var ctx = document.getElementById("myChart2");
new Chart(ctx, {
  type: 'bar',
  data: {
      labels: labelMonthyTurnover,
      datasets: [
          {
              data: [4, 1, 9, 7, 9, 11, 0, 13, 20, 0, 3, 2],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [2, 2, 9, 8, 8, 12, 0, 12, 21, 0, 2, 0],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [4, 3, 8, 9, 10, 9, 0, 13, 20, 0, 0, 0],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [5, 4, 6, 10, 11, 12, 0, 14, 14, 0, 1 ,3],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [4, 5, 8, 14, 12, 13, 0, 11, 27, 0, 2, 1],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [3, 6, 6, 12, 10, 11, 0, 12, 19, 0, 2, 1],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [4, 5, 7, 11, 9, 11, 0, 16, 30, 0, 0, 23],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [7, 6, 8, 10, 7, 12, 0, 15, 17, 0, 12, 2],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [6, 5, 9, 11, 12, 11, 0, 14, 18, 0, 0],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [5, 9, 10, 9, 11, 14, 11, 13, 19, 29, 26],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [4, 8, 12, 8, 10, 12, 16, 21, 29, 25, 26],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [5, 6, 8, 11, 9, 12, 15, 15, 20, 22, 22, 12],
              borderColor: "#e5e5e5",
              backgroundColor: "#e5e5e5"
          },
          {
              data: [3, 4, 6, 9, 8, 12, 13, 14, 32, 33, 35, 12],
              backgroundColor: 'blue',
              borderWidth: 1
          }
      ]
  },
  options: {
      legend: {
          display: false
      },
      responsive: true,
      animation: {
        easing: "easeInOutBack"
      },
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          barPercentage: 1.1,
          gridLines: {
            color: 'transparent',
          },
          ticks: {
            autoSkip: false,
          }
        }],
        yAxes: [{
          gridLines: {
            color: 'transparent',
          }, 
          ticks: {
            beginAtZero:true,						
          }

        }]
      },
      
  }
});

var ctx = document.getElementById("myChart3");
new Chart(ctx, {
  type: 'bar',
  data: {
      labels: labelMonthyTurnover,
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
  options: {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'end',
        labels: {
          usePointStyle: true,
          padding: 10
        }
      },
      responsive: true,
      scales: {
          xAxes: [{
              stacked: true,
              barPercentage: 0.4,
              gridLines: {
                  color: "transparent",
              }
          }],
          yAxes: [{
              ticks: {
                  beginAtZero:true,
                  barThickness: 30
              } 
          }]
      },
  }
});

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelcurrentMonth,
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


// Bar Chart Example
var ctx = document.getElementById("myBarChart");
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelWeeklyData,
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'end',
      labels: {
        usePointStyle: true,
        padding: 10
      }
    },
    responsive: true,
    animation: {
      easing: "easeInOutBack"
    },
  }
});