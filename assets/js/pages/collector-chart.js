//net milk collection line graph
var options = {
        series: [{ name: "Net Collections", data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14, 32] }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        chart: { type: "area", height: 40, sparkline: { enabled: !0 } },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#34c38f"],
        fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: .45, opacityTo: .05, stops: [25, 100, 100, 100] } },
        tooltip: { fixed: { enabled: !1 }, x: { show: true }, marker: { show: !1 } },
        tooltip: {
            y: {
                formatter: function(value, x, { series, seriesIndex, dataPointIndex, w }) {
                    return numeral(value).format('0,0')

                }
            }
        },

    },
    chart = new ApexCharts(document.querySelector("#area-sparkline-chart-1"), options);
chart.render();

// rejected quantity graph

options = {
    series: [{ name: "Rejected", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }],
    chart: { type: "area", height: 40, sparkline: { enabled: !0 } },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#f46a6a"],
    fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: .45, opacityTo: .05, stops: [25, 100, 100, 100] } },
    tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } }
};
(chart = new ApexCharts(document.querySelector("#area-sparkline-chart-2"), options)).render();

// total cash deductions

options = {
    series: [{ name: "Deductions", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] }],
    chart: { type: "area", height: 40, sparkline: { enabled: !0 } },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#f1b44c"],
    fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: .45, opacityTo: .05, stops: [25, 100, 100, 100] } },
    tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
    tooltip: {
        x: { format: "dd MMM yyyy" },
        y: {
            formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                return numeral(value).format('0,0.00') + " KG"

            }
        }
    },
};
(chart = new ApexCharts(document.querySelector("#area-sparkline-chart-3"), options)).render();


// farmer payments graph
var options = {
        chart: {
            height: 360,
            type: "bar",
            stacked: !1,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            },

        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "40%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },
        stroke: { show: !0, width: 2, colors: ["transparent"] },

        yaxis: {
            labels: {
                formatter: function(value) {
                    // return "KES " + value;
                    return numeral(value).format('0,0 a')
                },
                // formatter: function(val, index) {

                //     return numeral(val).format('0,0')
                // },



            },
            title: {
                text: "Amount in KES",
            }
        },
        series: [{
            name: "Net Wedges",
            data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820]
        }, {
            name: "Deductions",
            data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: ["#556ee6", "#f46a6a"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li><b>Price</b>: ' + data.x + '</li>' +
                    '<li><b>Number</b>: ' + data.y + '</li>' +
                    '<li><b>Product</b>: \'' + data.product + '\'</li>' +
                    '<li><b>Info</b>: \'' + data.info + '\'</li>' +
                    '<li><b>Site</b>: \'' + data.site + '\'</li>' +
                    '</ul>';
            }
        },

        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "KES " + numeral(value).format('0,0')

                }
            }
        },
        tooltip: {
            y: [{ title: { formatter: function(e) { return e + " (mins)" } } },
                { title: { formatter: function(e) { return e + " per session" } } },
                { title: { formatter: function(e) { return e } } }
            ]
        },

    },
    chart = new ApexCharts(document.querySelector("#member-salary-chart"), options);
chart.render();

var options = {
        series: [{ name: "Accepted", data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26] }

        ],
        chart: { height: 350, type: "area", toolbar: { show: !1 } },
        colors: ["#34c38f", "#f46a6a"],
        dataLabels: { enabled: !1 },
        stroke: { curve: "smooth", width: 2 },
        fill: { type: "gradient", gradient: { shadeIntensity: 1, inverseColors: !1, opacityFrom: .45, opacityTo: .05, stops: [20, 100, 100, 100] } },
        xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] },
        markers: { size: 3, strokeWidth: 3, hover: { size: 4, sizeOffset: 2 } },
        legend: { position: "top", horizontalAlign: "right" }
    },
    chart = new ApexCharts(document.querySelector("#overview-chart-timeline"), options);
chart.render();