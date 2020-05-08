////////////////////////////////////////////////////////////
// Sparkline graph
$(function () {  
    $('.lineChart').sparkline([102,109,120,99,110,80,87,74,102,109,120,99,110,80,87,74], {
        type: 'line',
        height: '100',
        width: '250',
        lineWidth: '2',
        lineColor: '#177dff',
        fillColor: 'rgba(23, 125, 255, 0.2)'
    });

    $('.barChart').sparkline([102,109,120,99,110,80,87,74,102,109,120,99,110,80,87,74], {
        type: 'bar',
        height: '100',
        width: '250',
        barWidth: 9,
        barSpacing: 10,
        barColor: '#177dff'
    });

    $('.tristateChart').sparkline([1,1,0,2,-1,-1,1,-1,0,3,1,1], {
        type: 'tristate',
        height: '100',
        width: '250',
        barWidth: 9,
        barSpacing: 10,
        barColor: '#177dff'
    });

    $('.discreteChart').sparkline([4,6,7,7,4,3,2,1,4,4], {
        type: 'discrete',
        height: '100',
        width: '250',
        barColor: '#177dff'
    });

    $('.pieChart').sparkline([1,1,2], {
        type: 'pie',
        width: '250',
        height: '100',
    });

    $('.bulletChart').sparkline([10,12,12,9,7], {
        type: 'bullet',
        width: '250',
        height: '100',
    });

    $('.boxChart').sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100], {
        type: 'box',
        width: '250',
        height: '100',
    });

    /** This code runs when everything has been loaded on the page */
    /* Inline sparklines take their values from the contents of the tag */
    $('.inlinesparkline').sparkline(); 

    /* Sparklines can also take their values from the first argument 
    passed to the sparkline() function */
    var myvalues = [10,8,5,7,4,4,1];
    $('.dynamicsparkline').sparkline(myvalues);

    /* The second argument gives options such as chart type */
    $('.dynamicbar').sparkline(myvalues, {type: 'bar', barColor: 'green'} );

    /* Use 'html' instead of an array of values to pass options 
    to a sparkline with data in the tag */
    $('.inlinebar').sparkline('html', {type: 'bar', barColor: 'red'} );
});