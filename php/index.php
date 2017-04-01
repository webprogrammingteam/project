<?php
	session_start();
	$username = $_SESSION["username"];
	// $username = $_COOKIE['username'];
	// echo $username;
	$array = array();
    array_push($array, $username);

    echo json_encode($array);
?>