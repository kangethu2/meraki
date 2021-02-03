<?php
include 'config.php';

// prepare and bind
$stmt = $conn->prepare("INSERT INTO website_leads (first_name, last_name, mobile, email, product_id, location) VALUES (?,?,?,?,?,?)");
$stmt->bind_param("ssdsss", $first_name, $last_name, $mobile, $email, $product, $location);

// set parameters and execute
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$mobile = $_POST["mobile_no"];
$email = $_POST["email_address"];
$product = $_POST["product"];
$location = $_POST["location"];
// $first_name = "first_name";
// $last_name = "last_name";
// $mobile = "02222";
// $email = "email1";
// $product = "product1";
// $location = "location3";
$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>
