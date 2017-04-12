$(document).ready(function(){

         $.ajax({
            type: 'GET',
            url: 'php/logout.php',
            dataType: "json",
            // data: {username: uname, password: pwd, email: email, fname: fname, lname: lname, address: addr, phone: phone},
            success: function(msg) {
               // $.each(msg, function(index, element){
               //    console.log(index, element);
               //    // $res = "<p>" + element + "</p>";
               //    if(element == "logout"){
                     var e = document.getElementById('signin');
                     // e.text = msg;
                     e.setAttribute('href','index.html')
                     // var par = document.getElementById('signinParent');
                     // var parent = par.parentNode;
                     var logout = document.getElementById('logout');
                     var parent = logout.parentNode;
                     parent.removeChild(logout); 
                     window.location.replace('index.html');
                  // }
               // });
               

               // parent.appendChild(logout);
            }
         });
});