$(document).ready(function(){
   showajax();
});



function showajax(){
   $.ajax({
      type: 'POST',
      url: 'php/orderHis.php',
      dataType: "json",
      success: function(msg) {
         if(msg == "empty"){
            $("#admin_content").html("NO Orders");
         }
         else{
            list = "<table><tr><th>Order ID</th><th>Order date</th><th>Expected shipping date</th><th>Actual shipping date</th><th>Details</th></tr>";
            // list = "<table><tr><th>Order ID</th><th>Order date</th><th>Expected shipping date</th><th>Actual shipping date</th></tr>";

            $.each(msg, function(index, item){
               console.log(index, item);
               list += "<tr><td>" + item['OrderID'] + "</td><td>" + item['order_date']
                       + "</td><td>" + item['exp_ship_date']
                       + "</td><td>" + item['actual_ship_date']
                       + "</td><td><button class=\"btn_edit_delete\" onclick=\"showDetails('" + item['OrderID'] + "')\">Details</button><br/></td></tr>";
                       // + "</td></tr>";

            });
            list += "</table>"
            // $("#order_details").show();
            $("#admin_content").html(list);
         }
         
      }
   });
}

function showDetails(orderId){
   $.ajax({
      type: 'POST',
      url: 'php/orderDetails.php',
      dataType: "json",
      data: {orderId: orderId},
      success: function(msg2) {
         if(msg2 == "empty"){
            $("#order_details").html("NO Orders");
         }
         else{
            list2 = "<table><tr><th>Order ID</th><th>Products</th><th>Quantity</th><th>Price</th></tr>";
            $.each(msg2, function(index, item){
               console.log(index, item);
               list2 += "<tr><td>" + item['OrderID'] + "</td><td>" + item['pname']
                       + "</td><td>" + item['buyQuantity']
                       + "</td><td>" + item['totalPrice'] + "</td></tr>";
            });
            list2 += "</table>"
            button = "<button class=\"btn_edit_delete\" onclick=\"returnHis()\"> Return</button>"
            $("#admin_content").hide();
            $("#order_details").html(list2).show();
            $("#returnHis").html(button).show();
         }
         
      }
   });
}
function returnHis(){
   $("#admin_content").show();
   $("#order_details").hide();
   $("#returnHis").hide();

}





