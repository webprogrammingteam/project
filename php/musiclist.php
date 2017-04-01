<!DOCTYPE html>
<html lang="en">
<head>
  <title>Admin</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!--   <link rel="stylesheet" href="css/login.css"> -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
    /* Set the whole body into black*/
    body{
      background-color: black;
    }

    /* Color and font size of category*/
    .container h3{
      color: white;
    }
    .container h3 a{
      font-size: 14px;
    }
    /* Remove the navbar's default rounded borders and increase the bottom margin */
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Remove the jumbotron's default bottom margin */
     .jumbotron {
      margin-bottom: 0;
    }
   
    /* Add a gray background color and some padding to the footer */
    footer {
      background-color: #f2f2f2;
      padding: 25px;
    }
  </style>
  <style>
  .carousel-inner {
      max-height: 400px;
      margin-bottom: 50px;
      border-radius: 0;
    }

  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
      max-height: 400px;
      /*width: 70%;*/
      margin: auto;
  }
  </style>
</head>
<body>

 <!-- First navigation bar -->
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Logo</a>
      <form action="action_page.php">
  <input type="search" name="googlesearch">
</form>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#login" id="signin" onclick="document.getElementById('id01').style.display='block'" style="width:auto;"><span class="glyphicon glyphicon-user"></span> Sign In</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
      </ul>
    </div>
  </div>
</nav>



<div class="container-fluid text-center">
<div class="col-sm-4 text-left">
<table>
  <tr><th>Music ID</th><th>Music Name</th><th>Category</th><th>Price</th><th>Quantity</th><th>Status</th><th></th></tr>
  <?php
  $con = mysqli_connect('localhost', 'root', 'root', 'MusicStore');
 
  if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
  }

  $query = "SELECT * FROM Products";
  $res = mysqli_query($con, $query);
  while($item = $res -> fetch_assoc()){
    if($item['quantity'] == 0){
      $quantity = 'Out of Stock';
    }else{
      $quantity = $item['quantity'];
    }

    if($item['isDelete'] == 1){
      $delete = 'Deleted';
    }else {
      $delete = 'Available';
    }
    echo "<tr><td>".$item['PID']."</td><td>".$item['pname']."</td><td>".$item['category']."</td><td>".$item['Price']."</td><td>".$quantity."</td><td>".$delete."</td>
    <td><button class="edit" onclick="edit('.$item['PID'].')">Edit</button><br/><br/><button onclick="del('.$item['PID'].')">Delete</button></td></tr>";
  }
  ?>
</table>

</div> 
</div><br>


<footer class="container-fluid text-center">
  <p>Online Store Copyright</p>
  <form class="form-inline">Get deals:
    <input type="email" class="form-control" size="50" placeholder="Email Address">
    <!-- <button type="button" class="btn btn-danger">Sign Up</button> -->
  </form>
</footer>

</body>
</html>

