$(document).ready(function(){
  alert("ok");

         $.ajax({
            type: 'GET',
            url: 'php/index.php',
            // data: {username: uname, password: pwd, email: email, fname: fname, lname: lname, address: addr, phone: phone},
            success: function(msg) {

              alert("success");
              $("#listOfProducts").html(msg);

            },
            error: function(){

              alert("failure");
            }
         });
});
