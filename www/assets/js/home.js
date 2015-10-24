var Home = function(){
	this.titulo = "RESUMEN";
	this.dom = $("#home");

	$("#home .btempezar").click(function(){
	
		getContent({page:"menu"},true);
	
	});

}
Home.prototype = new Seccion();