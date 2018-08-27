$(document).ready(function(){

		$("#bytFont").click(function(){ 	//  Ändrar texten på elementet med id bytFont
			$("#bytFont").css("font-family", "Arial");
		});

	$("#nyText").click(function(){ //  Lägger till mer text i elementet med id nyText
		$("#nyText").append("<br>"+"Ny text ");
	});

	$("#radera").click(function(){ // Tar bort sektionen som har id radera
		$("#radera").remove();
	});

	$("#getTitel").click(function(){ // Lägger attributet från elementet som har id getTitel i addTitel
		$("#addTitel").append($("#getTitel").attr("title"));
	});

	$("#raderaKlass").click(function(){// Tar bort klassattributet "raderaKlass"
		$("#raderaKlass").removeClass("raderaKlass");
	});

	$("#addClass").click(function(){// Lägger till klassattributet från css "raderaKlass"
		$("#addClass").addClass("raderaKlass");
	});

	$(document).keypress(function(e){ // Skriver vilket tangent på tagnentbordet ID som senast blev tryckt
		$("#tryckTang").html("Tangenten har ID: " + e.which);
	});

	$("#fokus").focus(function(){// Text visas om textrutan har fokus genom focus() och  om den inte har fokus blur()
		$("#fokusText").html("Mitt i rutan!").css("color","darkolivegreen");
	});

	$("#fokus").blur(function(){// Skriver om rutan inte är blur
		$("#fokusText").html("Utanför rutan!").css("color","darkred").css("font-family", "Arial");
	});


	window.onresize = function(event) {// När storleken på fönstret ändrar ändras,blir bakgrundsfärgen conrsilk.
    document.body.style.background = "#FFF8DC";
	};
	$("#hovChange").hover(function(){//  Ändrar texten när musen är i stadie hover
		$("#changeHovText").html("Coolt va texten ändras när du håller musen över").css("color","darkred").css("font-family", "Arial").css("font-size", "150%");
	}, function(){
		$("#changeHovText").html("Håll musen över denna text").css("color","blue");
	});

	$("#events").click(function(event) { // Kordinationerna på muspekaren visas dess x och  position
    var x = event.screenX;
    var y = event.screenY;
    var kordi = "X : " + x + ", Y : " + y;
    document.getElementById("kordinationer").innerHTML = kordi;
	});

	$("#linkblock").click(function(e){// Förhindrar standardhändelser som i detta fall en länk
		e.preventDefault();
	});

	////
	$("#raderaEvent").click(function(){//  Lägger till mer text när man klickar på sektionen.
		$("#raderaEvent").append("Hej "+"<br>");
	});

	$("button").click(function(){//  Denna funktion ser till att stoppa den första funktionen som lade till mer text
		$("#raderaEvent").off("click");
	});
	////

});
