<?php

//============== Show info from DB =================
//============== variables =========================

include 'dbconect.php';

//============== logic =============================


$val = array();
$data = array();

	$info = "SELECT * FROM gameTexts";


	$result = mysqli_query($dbconn, $info);
    $row = mysqli_fetch_all($result, MYSQLI_ASSOC);

    mysqli_free_result($result);
    $out = json_encode($row);
    
    echo "$out";


$dbconn->close();
?>