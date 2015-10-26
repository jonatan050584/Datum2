var Home = function(){
	this.titulo = "RESUMEN";
	this.dom = $("#home");

	$("#home .btempezar").bind({
		mousedown:function(){
			$(this).addClass("over");
		},
		mouseup:function(){
			getContent({page:"menu"},true);
			$(this).removeClass("over");
		}
		
	});

}
Home.prototype = new Seccion();