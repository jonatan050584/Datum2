var nav = new Array("home");
var path = "http://192.168.0.12/datum/";
var home;
var header;
var data;
var detalle;

var history = new Array();



function ruta(str){
	return path+str;
}

$(document).ready(function(){


	var home = new Home();

	header = new Header($("#nav"));
	header.setTitulo("RESUMEN");

	data = new Data();
	data.iniciar();

	
});

var Data = function(){
	this.iniciar = function(){
		$.ajax({
			//crossDomain: true,
			url:"assets/data.json",
			dataType:'json',
		}).done(function(res){
			categorias = new Categorias(res.data);
			categorias.listar();
		});
	}
};




var Header = function(dom){
	this.dom = dom;

	this.setTitulo = function(tit){
		dom.find(".titulo").html(tit);
	}
	this.showBack = function(){
		$("#nav .back").show();
	}

	$("#nav .back").on("tap",function(){

	})

}
var Home = function(){
	this.dom = $("#home");

	this.dom.find(".btempezar").click(function(){
		/*$("#home").hide();
		$("#menu").show();
		header.showBack();
		categorias.listar();*/
		//history.pushState(null, null, "menu"); 
		getContent("menu",true);
		//e.preventDefault();
		//location.href="menu";
	})
}
window.onpopstate = function(event) {
  alert(location.pathname);
};


function getContent(url,addEntry){

	var ruta = url.split("/");

	alert(ruta.length); 
	if(ruta.length==1){
		switch(ruta[0]){
			case "menu":
				$("#home").hide();
				$("#menu").show();
				break;
		}
	}
	

	if(addEntry == true) {
		history.pushState(null, null, url); 
	}

}

var Categorias = function(data){
	this.dom = $("#menu");
	this.data = data;

	this.listar = function(){

		var preHTML = this.dom.html();
		this.dom.empty();

		$.each(this.data,function(key,val){

			var cat = new ItemCategoria(val);
		})
		this.dom.append(preHTML);

		header.setTitulo("DATUM - Pulso Perú");

	}
}



var ItemCategoria = function(data){

	this.data = data;
	this.dom = null;
	this.template = '<div class="item cat" id="cat-{id}" data-id="{id}">'+
		'<div class="bt">'+
			'<div class="nom"><div class="txt">{nombre}</div></div>'+
		'</div>'+
	'</div>';

	
	var html = this.template;
		html = html.replace("{nombre}",this.data.nombre);
		html = html.replace("{id}",this.data.id);
		html = html.replace("{id}",this.data.id);
	$("#menu").append(html);

	this.dom = $("#cat-"+this.data.id+" .bt");
	this.dom.css("background-image","url("+ruta("files/"+this.data.icono)+")");
	
	this.dom.on("tap",function(){
		categorias.dom.hide();
		detalle = new DetalleCategoria(data);
	});

}

var DetalleCategoria = function(data){
	$("#temas .categoria").html(data.nombre);
	$("#temas").show();
	$("#temas .banner").css("background-image","url("+ruta("files/"+data.imagen)+")");
	$("#temas .banner .area").css("background-image","url("+ruta("files/o"+data.icono)+")");
	header.setTitulo(data.nombre);
	var temas = new Temas(data.temas);
	temas.listar();

	this.limpiarLista = function(){
		$("#temas .lista").empty();
	}
}


var Temas = function(data){
	this.data = data;

	this.listar = function(){
		$.each(data,function(key,val){
			var item = new ItemTema(val);
		});
	}
}
var ItemTema = function(data){
	this.template = '<div class="item {class}" id="tem-{id}"><div class="txt">{titulo}</div></div>';

	var cl="";
	if(data.temas!=undefined) cl = "ani";
	
	var html = this.template.replace("{titulo}",data.titulo);
		html = html.replace("{class}",cl);
	this.dom = $(html);
	$("#temas .lista").append(this.dom);
	
	this.dom.on("tap",function(){

		if(data.temas){

			header.setTitulo(data.titulo);
			detalle.limpiarLista();
			var tm = new Temas(data.temas);
			tm.listar();
		}
	})


}
