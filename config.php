<?php
$servername = "ngn.co.ke";
$username = "ngncoke";
$password = "HKc5*(94siYw4L";
$db = "ngncoke_website";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
?> 