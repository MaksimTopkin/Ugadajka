<?php

//============== Show info from DB =================
//============== variables =========================

include '../dbconect.php';

//============== logic =============================


// $val = array();
// $data = array();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
	case 'PUT':
		doNothing();
		break;
	case 'POST':
		doNothing();
		break;
	case 'GET':
		$info = "SELECT * FROM user";

		$result = mysqli_query($dbconn, $info);
		$row = mysqli_fetch_all($result, MYSQLI_ASSOC);

		mysqli_free_result($result);
		$out = json_encode($row);
    
		echo "$out";
		break;
	default:
		doNothing();
		break;
};



$dbconn->close();
?>