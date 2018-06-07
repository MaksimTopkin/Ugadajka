<?php

// ================== PHP variables ======================

$servername = 'localhost';
$username = 'root';
$password = '12345';
$dbname = 'my_db';
$my_dbCreate = 'CREATE DATABASE my_db'; 

// ================= Variables from HTML =================

//$dbCreate = 0;
//$dbCreate = $_REQUEST["dbcreate"];

// ================ script logic =========================


$conn = new mysqli($servername,$username,$password);
  
if ($conn->connect_error):
  die ('cannot connect to MySql: '.$conn->connect_error);
endif;



  if (mysqli_select_db($conn,$dbname)){
      echo "<br>"."DB exists"."<br>";
  } 
  else {
    $conn->query($my_dbCreate);
    echo "DB is created !"."<br>";
  };




if (mysqli_select_db($conn,$dbname)):
  $dbconn = new mysqli($servername,$username,$password,$dbname);

  $createTable = "CREATE TABLE labels (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  txtLabels VARCHAR(100) NOT NULL,
  texts VARCHAR(800) NOT NULL
  )";

  if ($dbconn->query($createTable) === TRUE) {
    echo "Table user created successfully"."<br>";
} else {
    echo "Error creating table: " . $dbconn->error;
};
endif;




$conn->close();
$dbconn->close();