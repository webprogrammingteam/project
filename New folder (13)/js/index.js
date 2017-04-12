$(document).ready(function(){
         $.ajax({
            type: 'GET',
            url: 'php/index.php',
            dataType: "json",
            // data: {username: uname, password: pwd, email: email, fname: fname, lname: lname, address: addr, phone: phone},
            success: function(msg) {
               var element = document.getElementById('signin');
               element.text = msg;
               // element.removeAttribute('href')
               element.href = "orderHis.html";
               var par = document.getElementById('signinParent');
               var newList = document.createElement("li");
               var logout = document.createElement("a");
               logout.text = "Log out";
               // logout.href = "login.html";

               logout.href = "php/logout.php";
               logout.setAttribute('id', "logout");
               newList.appendChild(logout);
               var parent = par.parentNode;
               parent.appendChild(newList); 
               // parent.appendChild(logout);
            }
         });
});
