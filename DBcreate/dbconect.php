<?php

//============= connect to DB ==================

$servername = 'localhost';
$username = 'root';
$password = '12345';
$dbname = 'my_db';
$dbconn = new mysqli($servername,$username,$password,$dbname);

if ($dbconn->connect_error):
	die ("cannot conect to DB: ".$dbconn->connect_error);
endif;


?>