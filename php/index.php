<?php

	session_start();

	$host="localhost"; // Host name
	$user="root"; // Mysql username
	$pwd="root"; // Mysql password
	$db_name="web_project"; // Database name

	// Connect to server and select databse.
	$con=mysqli_connect($host, $user, $pwd, $db_name);

	if (mysqli_connect_errno())
	{
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
		exit();
	}


$query = "SELECT * FROM products";

	if ($result=mysqli_query($con,$query))
	{
		// Return the number of rows in result set
		$rowcount=mysqli_num_rows($result);
		if($rowcount>0){
			while($row = mysqli_fetch_array($result)){
				$image = '<img src="img/'.$row["image"].'" alt="image"/>';
				$artist = $row["pname"];
				$price = $row["price"];
				$description = $row["description"];
				$category = $row["category"];
				$productListing = $image.'</br>'. $artist . ' '. $price.' '. $description.' '. $category.'</br>';
				echo ($productListing);
			}
		}
	//
	mysqli_free_result($result);
	}
	else{
		echo "can't connect </br>";
		exit();
	}
		mysqli_close($con);


	// session_start();
	// $username = $_SESSION["username"];
	// // $username = $_COOKIE['username'];
	// // echo $username;
	// $array = array();
  //   array_push($array, $username);
	//
  //   echo json_encode($array);
?>
