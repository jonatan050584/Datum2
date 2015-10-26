var Menu = function(){
	

	this.titulo = "DATUM - Pulso Perú";
	this.dom = $("#menu");

	var preHTML = this.dom.html();
	$("#menu").empty();

	$.each(data,function(key,val){
		var cat = new ItemCategoria(key);
	});

	$("#menu").append(preHTML);

	$("#menu .item.contacto").on("tap",function(){
		getContent({page:"contacto"},true);
	});

}

Menu.prototype = new Seccion();

var ItemCategoria = function(key){
	var it = data[key];
	this.template = '<div class="item cat" id="cat-{id}" data-id="{id}">'+
		'<div class="bt">'+
			'<div class="con">'+
				'<img src="files/{icono}" height="63" width="66" alt="" class="ico">'+
				'<div class="nom"><div class="txt">{nombre}</div></div>'+
			'</div>'+
			
		'</div>'+
	'</div>'

	

	var html = this.template;
		html = html.replace("{nombre}",it.nombre);
		html = html.replace("{id}",it.id);
		html = html.replace("{id}",it.id);
		html = html.replace("{icono}",it.icono);
	
	this.dom = $(html);
	
	$("#menu").append(this.dom);

	//this.dom.find(".bt").css("background-image","url("+ruta("files/"+it.icono)+")");
	
	this.dom.on("tap",function(){
		getContent({page:"categoria",keycat:key,padre:null},true);
	});

}