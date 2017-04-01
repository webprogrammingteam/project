<?php
session_start();

session_unset();

session_destroy();

// setcookie("username","*log")
// $username = $_COOKIE['Log in'];
// 	// echo $username;
// $array = array($username);
// echo json_encode($array);
header("location: ../login.html");
// setcookie("username", "", time() - 3600);
// $username = $_COOKIE['username'];
// // echo $username;
// $array = array();
// array_push($array, $username);

// echo json_encode($array);
?>