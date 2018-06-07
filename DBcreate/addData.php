<?php

header("Content-Type: application/json; charset=UTF-8");

//=================== send information to DB ===============
//=================== variables ============================


include 'dbconect.php';
$json = json_decode($_REQUEST['x'], false);

$label = $json -> question;
$text = $json -> answer;

//=================== logic ================================



  $add = "INSERT INTO  labels (txtLabels,texts) VALUES ('$label','$text')";
  if ($dbconn -> query($add) === TRUE) {
    echo '{"answer":"data is added to DB"}';
  } else {
    echo '{"answer":"Data is NOT added to DB: "}'.$add.$dbconn->error;
  };



$dbconn->close();
