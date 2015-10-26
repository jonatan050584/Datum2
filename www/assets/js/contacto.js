var Contacto = function(){
	this.titulo = "CONTACTO";
	this.dom = $("#contacto");

	$("#contacto .dir").on("tap",function(){
		window.open("https://www.google.es/maps/place/12%C2%B005'23.3%22S+77%C2%B002'22.7%22W/@-12.089802,-77.0401842,19z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0", '_system');
	});
	$("#contacto .web").on("tap",function(){
		var ref = cordova.InAppBrowser.open("http://picnic.pe", "_system","location=yes");
	})

};
Contacto.prototype = new Seccion();