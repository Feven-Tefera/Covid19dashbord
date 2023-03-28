// world total chart 

Highcharts.chart('chart4', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'World Total Covid19 Record'
    },
    xAxis: {
        categories: ['TotalConfirmed', 'TotalDeaths', 'TotalRecovered']
    },
    yAxis: {
        title: {
            text: 'World Total'
        }
    },
    series: [ {
        name: 'world Total',
        data: [674300771, 6793224, 0]
    }]
});
    
// chart two

Highcharts.chart('chart2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'South Africa Covid19 record'
    },
    xAxis: {
        categories: ['Confirmed', 'Active', 'Recovered']
    },
    yAxis: {
        title: {
            text: 'Country record'
        }
    },
    series: [{
        name: 'Active',
        data: [663282, 54260, 592904]
    }, {
        name: 'Recovered',
        data: [665188, 54753, 594229]
    }, {
        name: 'Deaths ',
        data: [667049, 54850, 595916]
    }, {
        name: 'Confirmed',
        data: [668529, 53068, 599149]
    }
]
});

// chart 3 summary 


Highcharts.chart('chart3', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Summary For Covid19 Records'
    },
    series: [{
        name: 'Covid19 Records',
        data: [
            ['NewConfirmed', 177325],
            ['TotalConfirmed', 674300771],
            ['NewDeaths', 1319],
            ['TotalDeaths', 6793224]
          
        ]
    }]
});


// chart 4 status

const chart = Highcharts.chart('container', {
    title: {
        text: 'Covid19 Status',
        align: 'left'
    },
    
    xAxis: {
        categories: ['Countries', 'ByCountryAllStatus', 'ByCountryTotal', 'DayOne', 'DayOneAllStatus', 'CountryDayOneTotalAllStatus', 'LiveCountryStatus', 'WorldTotal', 'WorldDaily']
    },
    series: [{
        type: 'column',
        name: 'Record',
        colorByPoint: true,
        data: [22598652, 126719519, 19936002, 5155254, 11080865, 29205646, 13740748, 6102674, 679789 ],
        showInLegend: false
    }]
});











      
        










































 