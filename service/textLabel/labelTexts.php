<?php

include '../dbconect.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
	case 'PUT':
		doNothing();
		break;
	case 'POST':
		doNothing();
		break;
	case 'GET':
		$info = "SELECT txtLabels,texts FROM labels";
		$res = $dbconn->query($info);

			while($dbinfo = $res->fetch_array()){
				$lables = $dbinfo['txtLabels'];
				$txts = $dbinfo['texts'];
				$labelTexts["$lables"] = "$txts";
			};

		$out = json_encode($labelTexts);
		echo "$out";
		break;
	default:
		doNothing();
		break;
};


$dbconn->close();
?>