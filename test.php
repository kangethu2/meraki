<?php
include 'config.php';

// prepare and bind
$stmt = $conn->prepare("INSERT INTO website_leads (first_name, last_name) VALUES (?,?)");
$stmt->bind_param("ss", $first_name, $last_name);

// set parameters and execute
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>

