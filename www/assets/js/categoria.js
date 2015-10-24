var Categoria = function(){
	this.dom = $("#categoria");
	this.cargar = function(key,padre){
		
		this.data = data[key];
		$("#categoria .nombre").html(this.data.nombre);
		$("#categoria .banner").css("background-image","url("+ruta("files/"+this.data.imagen)+")");
		$("#categoria .banner .area").css("background-image","url("+ruta("files/o"+this.data.icono)+")");
		header.setTitulo(this.data.nombre);
		this.temas = new Temas(key,padre);
		this.temas.limpiar();
		this.temas.listar();
	}
}
Categoria.prototype = new Seccion();




var Temas = function(keycat,padre){
	this.data = data[keycat].temas;

	this.listar = function(){
		$.each(this.data,function(key,val){
			if(val.padre==padre){
				var item = new ItemTema(keycat,val);
			}
		});
	}
	this.limpiar = function(){
		$("#categoria .lista").empty();
	}
}
var ItemTema = function(keycat,data){
	
	this.template = '<div class="item {class}" id="tem-{id}"><div class="txt">{titulo}</div></div>';

	var cl="";
	if(data.hijos==true) cl = "ani";
	
	var html = this.template.replace("{titulo}",data.titulo);
		html = html.replace("{class}",cl);
	this.dom = $(html);
	$("#categoria .lista").append(this.dom);
	
	this.dom.on("tap",function(){

		if(data.hijos==true){


			getContent({page:"categoria",keycat:keycat,padre:data.id},true);
			
		}else{
			getContent({page:"grafico"},true);
		}
	})


}