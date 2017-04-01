$(document).ready(function(){
   showajax();
});



function showajax(){
   $.ajax({
      type: 'POST',
      url: 'php/all_list.php',
      dataType: "json",
      success: function(msg) {
              
         list = "<table><tr><th>Movie ID</th><th>Movie Name</th><th>Image</th><th>Category</th><th>Description</th><th>Price</th><th>Quantity</th><th>Status</th><th></th></tr>";
         $.each(msg, function(index, item){
            console.log(index, item);
            list += "<tr><td>" + item['PID'] + "</td><td><div class=\"cell\">" + item['pname']
                    + "</div></td><td><img class=\"listimg\" src=img/" + item['image'] + "></td><td>" + item['category']
                    + "</td><td><div class=\"cell\">" + item['description'] + "</div></td><td>" + item['price']
                    + "</td><td>" + item['quantity'] + "</td><td>" + item['isDelete']
                    + "</td><td><button class=\"btn_edit_delete\" onclick=\"edit('" + item['PID'] + "')\" id=\"edit" + item['PID'] + "\">Edit</button><br/><br/>" 
                    + "<button class=\"btn_edit_delete\" onclick=\"del('" + item['PID'] + "')\" id=\"del" + item['PID'] + "\">Delete</button></td></tr>";
            if(item['isDelete'] == 'Deleted'){
               // alert("del" + item['PID']);
               $("#del" + item['PID']).val('Recover');
               // $("#edit" + item['PID']).remove();
            }
         });
         list += "</table>"
         $("#admin_content").html(list);
      }
               // $("#error").html($res);
            // error: function(error){
            //    console.log(error);
            // }
   });
}

function del(PID){
   if(confirm("Delete this product?") == true){
      $.ajax({
         type: 'POST',
         url: 'php/deleteItem.php',
         dataType: "json",
         data: {PID: PID},
         success: function(msg) {
            $.each(msg, function(index, item){
               console.log(index, item);
               if(item == "success"){
                  showajax();
               } else {
                  alert("Delete Failed!");
               }
            });
         }
      });
   }
}

function edit(PID){
   $("#admin_content").load("php/editItem.php", {'PID': PID});
}





