<?php

header("Content-Type: application/json; charset=UTF-8");

//=================== send information to DB ===============
//=================== variables ============================


include '../dbconect.php';

$method = $_SERVER['REQUEST_METHOD'];
$json = json_decode($_REQUEST['x'], false);

switch ($method) {
	case 'PUT':
		doNothing();
		break;
	case 'POST':
		$quest = $json -> question;
		$answ = $json -> answer;

  		$add = "INSERT INTO  user (question,answer) VALUES ('$quest','$answ')";
  		if ($dbconn -> query($add) === TRUE) {
    		echo '{"answer":"data is added to DB"}';
  			} else {
    		echo '{"answer":"Data is NOT added to DB: "}'.$add.$dbconn->error;
  		};
		break;
	case 'GET':
		doNothing();
		break;
	default:
		doNothing();
		break;
};





$dbconn->close();


?>