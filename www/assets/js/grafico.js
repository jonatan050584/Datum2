var Grafico = function(){
	this.dom = $("#grafico");

	this.cargar = function(){
		$('#grafico .chart').highcharts({
            chart: {
                plotBackgroundColor: 0,
                plotBorderWidth: 0,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Sistema leasing y alquiler venta'
            },
            subtitle: {
			            text: 'El gobierno ha aprobado un proyecto de ley que permite el acceso a viviendas a través del leasing y alquiler-venta. Dígame, ¿con esta ley aprobada, Ud. utilizaría o no utilizaría este sistema para comprar una vivienda?'
			        },
            tooltip: {
                animation: false,
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
	                    distance: -30,
	                    format: '{point.percentage:.1f} %',
	                    style: {
	                        fontWeight: 'bold',
	                        color: 'white',
	                        fontSize: '11px',
	                        textShadow: '0px 1px 0px black'
	                    }
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "Brands",
                colorByPoint: true,
                data: [{
                	name: "No lo utilizaría",
                	y: 40,
                    color: '#00B0F0'
                },{
                	name: "Ns/nc",
                	y: 17,
                    color:"#BFBFBF",
                },{
                	name: "Sí lo utilizaría",
                    color:"#0070C0",
                	y: 43
                }]
            }],
            credits:{
	        	enabled:false
	        },
	        exporting:{
	        	enabled:false
	        }
        });
	}

}
Grafico.prototype = new Seccion();