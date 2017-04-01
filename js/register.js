$(document).ready(function(){
   $("button").click(function(){
      var uname = $("#uname").val();
      var pwd = $("#psw").val();
      var email = $("#email").val();
      var fname = $("#fname").val();
      var lname = $("#lname").val();
      var addr = $("#address").val();
      var phone = $("#phone").val();
         $.ajax({
            type: 'POST',
            url: 'php/register.php',
            dataType: "json",
            data: {username: uname, password: pwd, email: email, fname: fname, lname: lname, address: addr, phone: phone},
            success: function(msg) {
               $.each(msg, function(index, element){
                  console.log(index, element);
                  if(element == "errorU"){
                     $("#error").text('This Username already existed');
                  }
                   else if (element == "errorE"){
                     $("#error").text('This email already existed');
                  } 
                  else if(element == "success"){
                     window.location.replace('index.html');
                  }
                  else{
                     $("#error").text("cannot create user");
                  }
               });
            }
         });
   });
});




