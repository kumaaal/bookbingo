<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$pnum = $_POST['pnum'];
$message = $_POST['subject'];
$formcontent="From: $name $lname $pnum \n Message: $message";
$recipient = "malith124@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
