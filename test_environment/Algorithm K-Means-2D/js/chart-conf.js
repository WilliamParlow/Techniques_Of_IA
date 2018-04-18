function createNewChart(chart) {

   Highcharts.chart(chart.container, {
       chart: {
           type: 'scatter',
           zoomType: 'xy'
       },
       title: {
           text: chart.title || 'No title'
       },
       subtitle: {
           text: chart.subtitle || 'No subtitle'
       },
       xAxis: {
           title: {
               enabled: true,
               text: chart.xTitle || 'No title'
           },
           startOnTick: true,
           endOnTick: true,
           showLastLabel: true
       },
       yAxis: {
           title: {
               text: chart.yTitle || 'No title'
           }
       },
       legend: {
           layout: 'vertical',
           align: 'left',
           verticalAlign: 'top',
           x: 100,
           y: 70,
           floating: true,
           backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
           borderWidth: 1
       },
       plotOptions: {
           scatter: {
               marker: {
                   radius: chart.plot.radius,
                   states: {
                       hover: {
                           enabled: true,
                           lineColor: 'rgb(100,100,100)'
                       }
                   }
               },
               states: {
                   hover: {
                       marker: {
                           enabled: false
                       }
                   }
               },
               tooltip: {
                   headerFormat: '<b>{series.name}</b><br>',
                   pointFormat: '{point.x} cm, {point.y} kg'
               }
           }
       },
       series: [chart.series]
   });   

}