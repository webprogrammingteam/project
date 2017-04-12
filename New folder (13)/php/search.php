<?php

$db = new PDO('mysql:dbname=MusicStore;host=localhost','root','root');

$page = isset($_GET['page'])? (int)$_GET['page'] : 1;

$perPage = 6; #6 per page

// Positioning
$start = ($page > 1) ? ($page * $perPage) - $perPage : 0 ;

$query = "";

$searchName = $_GET['searchname'];
$query = "SELECT SQL_CALC_FOUND_ROWS * FROM Products WHERE pname LIKE '%".$searchName."%' AND isDelete = 0
          LIMIT {$start}, {$perPage}";

$movies = $db->prepare($query);

$movies->execute();

$moviesRes = $movies->fetchAll(PDO::FETCH_ASSOC);

// Pages
$total = $db->query("SELECT FOUND_ROWS() as total")->fetch()['total'];
$pages = ceil($total/$perPage);

$result = array("pages"=>$pages,"page" =>$page, "movies"=>$moviesRes);


$jsonData = json_encode($result);
echo $jsonData; 

?>