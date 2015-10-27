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

	

	if(produccion){
		$("#nav .back").on({
			"touchstart":function(){
				$(this).addClass("over");
			},
			"touchend":function(){
				$(this).removeClass("over");
				history.go(-1);
			}
		});

		$("#nav .actions").on({
			"touchstart":function(){
				$(this).addClass("over");
			},
			"touchend":function(){
				$(this).removeClass("over");
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
			}
		});


	}else{
		$("#nav .back").bind({
			"mousedown":function(){
				$(this).addClass("over");
			},
			"mouseup":function(){
				$(this).removeClass("over");
				history.go(-1);
				
			}
		});

		$("#nav .actions").bind({
			"mousedown":function(){
				$(this).addClass("over");
			},
			"mouseup":function(){
				$(this).removeClass("over");
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
			}
		})
	}

	this.showMenu = function(){
		
		$("#nav .actions").show();
	}
	this.hideMenu = function(){
		
		$("#nav .actions").hide();
		$("#nav .actions").removeClass("over");
		$("#menusondeo").hide();
		$("#cubre").hide();
		$("#nav .back").show();
	}
	if(produccion){
		$("#menusondeo .item").on({
			"touchstart":function(){
				$(this).addClass("over");
			},
			"touchend":function(){
				$(this).removeClass("over");
				
				if($(this).hasClass("share")){
					canvg(document.getElementById('canvas'), graph.getSVG());

					
					window.plugins.socialsharing.share("Mensaje", null, null, 'http://www.datum.com.pe');

					header.hideMenu();
				}
			}
		});
	}else{
		$("#menusondeo .item").bind({
			"mousedown":function(){
				$(this).addClass("over");
			},
			"mouseup":function(){
				$(this).removeClass("over");
				if($(this).hasClass("share")){
					header.hideMenu();
					canvg(document.getElementById('canvas'), graph.getSVG());
					console.log(canvas.toDataURL());
					//window.plugins.socialsharing.share($("#sondeo .titulo").html(), null, canvas.toDataURL(), 'http://www.datum.com.pe');
					
				}
				
			}
		});
	}



}

