<?php
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

$con = mysqli_connect('localhost', 'root', 'root', 'MusicStore');
 
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$password = md5($password);
$query = "SELECT * FROM Users WHERE username = '".$username."' AND  password = '".$password."'";
$result = mysqli_query($con, $query);
$array = array();

if($result->num_rows == 0){
	array_push($array, "error");
    echo json_encode($array);
} 
else {
    $row = $result -> fetch_assoc();
    $isAdmin = $row['isAdmin'];
    if($isAdmin == 1){
        array_push($array, "success1");
        $_SESSION["username"] = $username;
        $_SESSION["pwd"] = $password;
        // setcookie("username", $username);
        // setcookie("pwd", $password);
    }else{
    	array_push($array, "success0");
        $_SESSION["username"] = $username;
        $_SESSION["pwd"] = $password;
        // setcookie("username", $username);
        // setcookie("pwd", $password);
    }
    echo json_encode($array);
    
}
?>