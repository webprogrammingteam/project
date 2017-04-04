$(document).ready(function(){

         $.ajax({
            type: 'GET',
            url: 'php/index.php',
            // data: {username: uname, password: pwd, email: email, fname: fname, lname: lname, address: addr, phone: phone},
            success: function(msg) {
              $("#listOfProducts").html(msg); //lists the products and all from php
            },
            error: function(){

              alert("failure");
            }
         });
});
