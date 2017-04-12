<?php
  
  $con = mysqli_connect('localhost', 'root', 'root', 'MusicStore');
 
  if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
  }

$query = "SELECT * FROM Products";
$res = mysqli_query($con, $query);
$array = array();
while($item = $res -> fetch_assoc()){
  if($item['quantity'] == 0){
    $item['quantity'] = 'Out of Stock';
  }else{
    $item['quantity'] = $item['quantity'];
  }

  if($item['isDelete'] == 1){
    $item['isDelete'] = 'Deleted';
  }else {
    $item['isDelete'] = 'Available';
  }
  array_push($array, $item);
}
echo json_encode($array);
?>