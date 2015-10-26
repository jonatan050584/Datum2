var Home = function(){
	this.titulo = "RESUMEN";
	this.dom = $("#home");

	$("#home .btempezar").on({
		'touchstart':function(){
			$(this).addClass("over");
		},
		'touchend':function(){
			getContent({page:"menu"},true);
			$(this).removeClass("over");
		}
		
	});

}
Home.prototype = new Seccion();