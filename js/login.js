$(document).ready(function(){
   $("button").click(function(){
      var uname = $("#username").val();
      var pwd = $("#password").val();
         $.ajax({
            type: 'POST',
            url: 'php/login.php',
            dataType: "json",
            data: {username: uname, password: pwd},
            success: function(msg) {
               // if(msg[0] == 'error'){
               //    $("#error").text('error');
               // }
               // else {
               //    window.location('Bootstrap.html');
               // }
               // alert(msg);
               // $res = '';
               $.each(msg, function(index, element){
                  console.log(index, element);
                  // $res = "<p>" + element + "</p>";
                  if(element == "error"){
                     $("#error").text('The username or password you entered is incorrect. Please try again.');
                  }
                   else if (element == "success1"){
                     window.location.replace('musiclist.html');
                  } else{
                     window.location.replace('index.html');
                  }
               });
               // $("#error").html($res);
            }
            // error: function(error){
            //    console.log(error);
            // }
         });
      });
    });




