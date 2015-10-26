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
	});

	this.showMenu = function(){
		
		$("#nav .actions").show();
	}
	this.hideMenu = function(){
		
		$("#nav .actions").hide();
	}
	$("#nav .actions").on("tap",function(){
		if(seccion=="sondeo"){
			if(!$(this).hasClass("activo")){
				$("#nav .back").hide();
				$(this).addClass("activo");
				$("#menusondeo").show();
				$("#cubre").show();
			}else{
				$("#nav .back").show();
				$(this).removeClass("activo");
				$("#menusondeo").hide();
				$("#cubre").hide();
			}
		}
	});

	$("#menusondeo .item").click(function(){
		if($(this).hasClass("share")){
			window.plugins.socialsharing.share('Message and image', null, 'https://www.google.nl/images/srpr/logo4w.png', 'http://picnic.pe')
			//window.plugins.socialsharing.share('Message only');
		}
	})

}

