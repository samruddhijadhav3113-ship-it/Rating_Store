<?php
// db.php

$servername = "localhost";
$username   = "root";
$password   = "mysql";       // ✅ your MySQL password
$dbname     = "myproject_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
