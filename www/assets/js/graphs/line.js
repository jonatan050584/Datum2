var Line = function(val){

    this.data = val;
	
    this.colors = shuffle(colors);

    this.titulo = null;
    if(val.titulo!=null) this.titulo='<h2 class="chart titulo">'+val.titulo+'</h2>';

    this.subtitulo = null;
    if(val.subtitulo!=null) this.subtitulo='<div class="chart subtitulo">'+val.subtitulo+'</div>';

    this.color = shuffle(colors);

	this.cargar = function(){
        Highcharts.setOptions({
            lang: {
                shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
                
            }
        });
		
        $('#chart'+val.id).highcharts('StockChart',{
                rangeSelector: {
                selected: 2
            },
                chart: {
                    type: 'spline'
                },
                colors: colors,
                title: {
                    text: this.titulo,
                    useHTML:true
                },
                data: {
                    csv: val.data,
                   
                    
                },
                rangeSelector:{
                    buttonTheme: {
                        width: 80,
                    },
                    buttons: [{
                    
                        type: 'month',
                        count: 6,
                        text: '6 meses'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1 año'
                    }, {
                        type: 'all',
                        text: 'Todo'
                    }],
                    inputEnabled: false

                },
                legend:{
                    enabled:true,
                    layout:"vertical",
                    symbolHeight:20,
                    symbolWidth:24,
                    symbolPadding:10,
                    padding:0,
                    itemMarginBottom:15,
                    useHTML:true,
                    labelFormat:'<div class="chart legend">{name}</div>'
                   
                },
              
                
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        pointWidth: 50,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.f}%'
                        },
                        enableMouseTracking: false
                    }
                },
                credits:{
                    enabled:false
                },
                exporting:{
                    enabled:false
                },
                navigator:{

                    enabled:false

                },
                scrollbar: {
                    enabled:false,
                   
                },
                
                
            });

//////////////////





        /*var chart = new Highcharts.Chart({

            chart: {
                renderTo:'chart'+val.id,
                plotBackgroundColor: 0,
                plotBorderWidth: 0,
                plotShadow: false,
                type: 'pie'
            },
            colors: colors,
            data:{
                csv:val.data
            },
            title: {
                text: this.titulo,
                useHTML:true
            },
            subtitle: {
                useHTML:true,
			    text: this.subtitulo
			},
            tooltip: {
                animation: false,
                enabled: false
            },
            legend:{
                layout:"vertical",
                symbolHeight:20,
                symbolWidth:24,
                symbolPadding:10,
                padding:0,
                itemMarginBottom:15,
                useHTML:true,
                labelFormat:'<div class="chart legend">{name}</div>'
               
            },
           
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    enableMouseTracking:false,
                    dataLabels: {

                        enabled: true,
	                    distance: -30,
                        useHTML:true,
	                    format: '<span class="chart pie label">{point.percentage:.1f} %</span>'
	                    
                    },
                    showInLegend: true,
                    point:{
                        events:{
                            legendItemClick:function(){
                                return false
                            },
                            mouseOver:function(){
                                return false
                            }
                        }
                    }
                }
            },
            series:{
               slicedOffset:0
            },
            credits:{
	        	enabled:false
	        },
	        exporting:{
	        	enabled:false
	        }
        });*/
	}

}
