var Bar = function(val){

    this.data = val;
    
    this.colors = shuffle(colors);

    this.titulo = null;
    if(val.titulo!=null) this.titulo='<h2 class="chart titulo">'+val.titulo+'</h2>';

    this.subtitulo = null;
    if(val.subtitulo!=null) this.subtitulo='<div class="chart subtitulo">'+val.subtitulo+'</div>';

    this.color = shuffle(colors);

    this.cargar = function(){
       
        
        var categorias = new Array();

        var csv = $.csv.toArrays(val.data);

        
        var cantSeries=csv[0].length-1;
        
        //console.log(cantSeries);

        var seriesOptions = [],
            seriesCounter = 0;

        for(var j=0;j<csv[0].length;j++){
            if(j>0){
                //console.log(j);
                seriesOptions[j-1]={
                    name:csv[0][j],
                    data:[]
                }
            }
        }

        


        $.each(csv,function(key,val){
            if(key>0){
                categorias.push(val[0]);
                for(var i=0;i<val.length;i++){
                    if(i>0){
                        seriesOptions[i-1].data.push(val[i]);
                    }
                }
                
            }
        });
        


        //console.log(categorias);
    

        $('#chart'+val.id).highcharts({
            chart: {
                type: 'bar',
               
            },
            colors:this.color,
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            data:{
                csv:val.data
            },
            xAxis: {
                categories: categorias,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                }
            },
            legend:{
                verticalAlign:"top"
                
            },
            tooltip: {
                enabled:false
            },
            
            plotOptions: {
                series: {
                    borderWidth: 0,
                    
                    dataLabels: {
                        padding:0,
                        allowOverlap:true,
                        enabled: true,
                        format: '{point.y:.0f}%',
                        rotation: 0,
                        defer: false,
                        style: {
                            fontWeight: 'normal',
                            fontSize: '10px'
                        }
                    }
                }
            },
            series: seriesOptions,
            /*series: [{
                color:"#A6A6A6",
                name: 'Febrero 2014',
                data: [13.1,11.6,10.6,11.4,10.9,10.4,10.5,10.6,9.2,9.1]

            }, {
                color:"#00B0F0",
                name: 'Mayo 2015',
                data: [0,0,0,10.7,11,0,9.4,10.1,0,8.8]

            }, {
                color:"#0070C0",
                name: 'Agosto 2015',
                data: [13.2,11,10.9,10.6,10.4,10,9.6,9.2,8.4,8.4]

            }],*/
            credits:{
                    enabled:false
                },
                exporting:{
                    enabled:false
            }
        });
                    
                    
                
                    
            

                
     }
}