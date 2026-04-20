<?php
if(isset($_POST['submit'])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $emailTo = "dzejkopjarosinski@gmail.com";
    $headers = "From: {$emailFrom}";
    $txt = "You have received an email from {$name}\n\n{$message}";

    mail($emailTo, $subject, $txt, $headers);
    header("Location: /#pg-consult");
    exit();
}
?>