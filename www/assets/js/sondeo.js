var Sondeo = function(){
	this.dom = $("#sondeo");

	this.cargar = function(data,categoria){
		header.setTitulo(categoria);
		$("#sondeo .titulo").html(data.titulo);
		$("#sondeo .info").html(data.info);
		
		if(data.subtitulo==null) $("#sondeo .subtitulo").html("").hide();
		else $("#sondeo .subtitulo").html(data.subtitulo).show();
		
		$("#sondeo .graficos").empty();

		$.each(data.sondeo,function(key,val){
			
			var grafico = new Grafico(val);

		
		});
<<<<<<< HEAD

=======
>>>>>>> parent of 17d7467... share
		
	}
}
Sondeo.prototype = new Seccion();

var graph;

var Grafico = function(data){
	var html = $('<div class="grafico"><div class="area" id="chart'+data.id+'"></div><div class="info"></div></div>');
	html.addClass(data.tipo);
	$("#sondeo .graficos").append(html);
	var graph;
	switch(data.tipo){
		case "pie":
			setTimeout(function(){
				graph = new Pie(data);
				graph.cargar();
			},1000);
			
			break;
		case "line":
			setTimeout(function(){
				graph = new Line(data);
				graph.cargar();
			},1000);
			break;
		case "bar":
			setTimeout(function(){
				graph = new Bar(data);
				graph.cargar();
			},1000);
			break;

		case "column":
		
			setTimeout(function(){
				graph = new Column(data);
				graph.cargar();
			},1000);
			
			break;
	}

}


var colors = new Array("#f02236","#019984","#e9ae30","#eb882a","#6fbcd6","#332e4c","#e4d5b8","#727391","#a72f30");

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}