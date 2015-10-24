var path = "http://picnic.pe/clientes/datum/";

var header;
var home;
var menu;
var categoria;
var grafico;


var data;

var seccion = "home";



function ruta(str){
	return path+str;
}


$(document).ready(function(){

	
	var datos = new Datos();
	datos.iniciar();

	
});

function iniciar(){
	header = new Header();
	home = new Home();
	menu = new Menu();
	categoria = new Categoria();
	grafico = new Grafico();

	getContent({page:"home"},true);
}

window.onpopstate = function(event) {



	getContent(event.state,false);

};


function getContent(obj,addEntry){

	
	var antseccion = seccion;

	

	seccion=obj.page;


	switch(seccion){
		case "categoria":
			categoria.cargar(obj.keycat,obj.padre);
			break;
		case "grafico":
			grafico.cargar();
			break;
	}

	if(seccion=="home") header.hideBack();
	else header.showBack();

	window[antseccion].ocultar();
	window[seccion].mostrar();

	if(addEntry == true) {
		history.pushState(obj,null); 
	}

}

var Datos = function(){

	this.iniciar = function(){
		$.ajax({
			//crossDomain: true,
			url:"assets/data3.json",
			dataType:'json',
		}).done(function(res){
			data = res.data;

			iniciar()

		
		});
	}
};


var Seccion = function(){
	this.dom = null;
	this.mostrar = function(){

		header.setTitulo(this.titulo);
		this.dom.show();
	}
	this.ocultar = function(){
		this.dom.hide();
	}
}

