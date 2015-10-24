var Header = function(dom){
	var dom = $("#nav");

	this.setTitulo = function(tit){
		dom.find(".titulo").html(tit);
	}
	this.showBack = function(){
		$("#nav .back").show();
	}
	this.hideBack = function(){
		$("#nav .back").hide();
	}

	$("#nav .back").on("tap",function(){
		history.go(-1);
	})

}