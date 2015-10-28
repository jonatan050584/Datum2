var path = "";

var header;
var home;
var menu;
var contacto;
var categoria;
var sondeo;
var datum;
var resumen;

var data;

var seccion = "home";

var produccion=true;


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
	sondeo = new Sondeo();
	contacto = new Contacto();
	datum = new Datum();
	resumen = new Resumen();
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
		case "sondeo":
			sondeo.cargar(obj.tema,obj.categoria);
			break;

	}
	if(seccion=="sondeo"){
		header.showMenu();
	}else{

		header.hideMenu();
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
			//url:"assets/json.php",
			dataType:'json',
		}).done(function(res){
			data = res.data;
			console.log(data);
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

