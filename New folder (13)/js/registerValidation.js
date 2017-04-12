$(document).ready(function() {
	// your js code goes here...
	$("#uname").after("<span id = 'spanU'></span><br/><br/>");
	$("#psw").after("<span id = 'spanP1'></span>");
	$("#spanP1").after("<p> </p><span id = 'spanP2'></span>");
	$("#spanP2").after("<p> </p><span id = 'spanP3'></span>");
	$("#spanP3").after("<p> </p><span id = 'spanP4'></span><br/>");
	$("#vpsw").after("<span id = 'spanVp'></span><br/><br/>");

	$("#email").after("<span id = 'spanE'></span><br/><br/>");
	$("#fname").after("<span id = 'spanFN'></span><br/><br/>");
	$("#lname").after("<span id = 'spanLN'></span><br/><br/>");
	$("#address").after("<span id = 'spanAd'></span><br/><br/>");
	$("#phone").after("<span id = 'spanPh'></span><br/><br/>");
	$("span").hide();

	validateUsername();
	validateEmail();
	validatePwd();
	validateVpws();
	validateName($("#fname"), $("#spanFN"), 2);
	validateName($("#lname"), $("#spanLN"), 2);
	validateAdr();
	validatePhone();
});

function validateVpws(){
	$("#vpsw").focus(function(){
		$("#spanVp").removeClass().addClass("info");
		$("#spanVp").text("Enter the password again").show();
	});

	$("#vpsw").blur(function(){
		var strVpsw = $("#vpsw").val();
		var psw = $("#psw").val();
		if(psw.length === 0){
			$("#spanVp").hide();
			return false;
		}
		else if(strVpsw.length === 0){
			$("#spanVp").removeClass().addClass("error");
			return false;
		}
		else if(strVpsw.localeCompare(psw) === 0){
			$("#spanVp").removeClass().addClass("ok").text("OK");
			return true;
		}
		else{
			$("#spanVp").removeClass().addClass("error");
			return false;
		}
	});
}

function validatePwd(){
	$("#psw").focus(function(){
		$("#spanP1").removeClass().addClass("info");
		$("#spanP1").text("at least 8 characters long").show();
		$("#spanP2").removeClass().addClass("info");
		$("#spanP2").text("at least 1 lowercase alphabetical character").show();
		$("#spanP3").removeClass().addClass("info");
		$("#spanP3").text("at least 1 UPPERCASE alphabetical character").show();
		$("#spanP4").removeClass().addClass("info");
		$("#spanP4").text("at least 1 numeric character").show();
	});

	$("#psw").blur(function(){
		var str = $("#psw").val();
		var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$");

		if($("#psw").val().length === 0){
			$("#spanP1").hide();
			$("#spanP2").hide();
			$("#spanP3").hide();
			$("#spanP4").hide();
			return false;
		}
		else if(strongRegex.test(str)){
			$("#spanP1").removeClass().addClass("ok").text("OK");
			$("#spanP2").hide();
			$("#spanP3").hide();
			$("#spanP4").hide();
			return true;
		}
		else{
			$("#spanP1").removeClass().addClass("error");	
			$("#spanP2").removeClass().addClass("error");	
			$("#spanP3").removeClass().addClass("error");	
			$("#spanP4").removeClass().addClass("error");	
			return false;
		}
	});
}

function validatePhone(){
	$("#phone").blur(function(){
		if($("#phone").val().length === 0){
			$("#spanPh").hide();
			return false;
		}
		else if($("#phone").val().length >= 10 && $("#phone").val().length <= 15){
			var reg = new RegExp("^[0-9]+$");
			var str = $("#phone").val();
			if(reg.test(str)){
				$("#spanPh").removeClass().addClass("ok").text("OK").show();
				return true;
			}
			else{
				$("#spanPh").removeClass().addClass("error").text("only numbers").show();
				return false;
			}
		}
		else{
			$("#spanPh").removeClass().addClass("error").text("not a validate phone number").show();
			return false;
		}
	});
}

function validateAdr(){
	$("#address").focus(function(){
		$("#spanAd").removeClass().addClass("info");
		$("#spanAd").text("at least 10 characters long").show();
	});

	$("#address").blur(function(){
		if($("#address").val().length === 0){
			$("#spanAd").hide();
			return false;
		}
		else if($("#address").val().length > 10){
			$("#spanAd").removeClass().addClass("ok").text("OK");
			return true;
		}
		else{
			$("#spanAd").removeClass().addClass("error").text("at least 10 characters");
			return false;
		}
	});
}


function validateName(name, span, length){
	$(name).focus(function(){
		$(span).removeClass().addClass("info");
		$(span).text("only alphabetical characters").show();
	});

	$(name).blur(function(){
		if($(name).val().length === 0){
			$(span).hide();
			return false;
		}
		else if($(name).val().length >= length){
			var reg = new RegExp("^[a-zA-Z]+$");
			var str = $(name).val();
			if(reg.test(str)){
				$(span).removeClass().addClass("ok").text("OK");
				return true;
			}
			else{
				$(span).removeClass().addClass("error").text("only alphabetical characters");
				return false;
			}
		}
		else{
			$(span).removeClass().addClass("error").text("at least "+length+" characters");
			return false;
		}
	});
}

function validateEmail(){
	$("#email").focus(function(){
		$("#spanE").removeClass().addClass("info");
		$("#spanE").text("should contain @").show();
	});

	$("#email").blur(function(){
		if($("#email").val().length === 0){
			$("#spanE").hide();
			return false;
		}
		else{
			var reg = new RegExp("@");
			var str = $("#email").val();
			if(reg.test(str)){
				$("#spanE").removeClass().addClass("ok").text("OK");
				return true;
			}
			else{
				$("#spanE").removeClass().addClass("error").text("Invalide Email Address");
				return false;
			}
		}
	});
}

function validateUsername(){
	$("#uname").focus(function(){
		$("#spanU").removeClass().addClass("info");
		$("#spanU").text("only alphabetical or numeric characters").show();
	});

	$("#uname").blur(function (){
		if($("#uname").val().length === 0){
			$("#spanU").hide();
			return false;
		}
		else if($("#uname").val().length > 4){
			var reg = new RegExp("^[0-9a-zA-Z]+$");
			var str = $("#uname").val();
			if(reg.test(str)){
				$("#spanU").removeClass().addClass("ok").text("OK");
				return true;
			}
			else{
				$("#spanU").removeClass().addClass("error").text("only alphabetical or numeric characters");
				return false;
			}
		}
		else{
			$("#spanU").removeClass().addClass("error").text("at least 5 characters");
			return false;
		}
	});
}
