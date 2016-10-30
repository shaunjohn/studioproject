<?php
session_start();

// Configuration option.
// Enter the $site_owners_email that you want to emails to be sent to.
// Example $site_owners_email = "joe.doe@yourdomain.com";

$site_owners_email = "hi@studioproject.co";  // Replace this with your own email address
$subject = "Website Contact Form";                       // subject to email             


// Alert info
$alert_success = "Form submitted successfully.";
$alert_error_name = "Please leave a name.";
$alert_error_email = "Please enter a valid email address.";
$alert_error_message = "Please leave a message.";
$alert_error_limit_send = "Exceeded the limit of sent messages";


$limit_send_message = 5; // limit to send message 



$name = filter_input(INPUT_POST, 'name');
$email = filter_input(INPUT_POST, 'email');
$contact_number = filter_input(INPUT_POST, 'contact_number');
$message = filter_input(INPUT_POST, 'message');

if( empty($_SESSION['send_email']) ) {
    
    $_SESSION['send_email'] = 1;
}
elseif( $_SESSION['send_email'] > $limit_send_message ) {
      
    $result = array(
        'status' => 0,
        'text' => $alert_error_limit_send
    );
    die(json_encode($result));
    
}


if ($name == "") {
    
    $result = array(
        'status' => 0,
        'text' => $alert_error_name
    );
    
}
elseif (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
    
    $result = array(
        'status' => 0,
        'text' => $alert_error_email
    );
    
}
elseif ($message == "") {
    
    $result = array(
        'status' => 0,
        'text' => $alert_error_message
    );
    
}
else {
   
    // OK - send email
    $_SESSION['send_email']++;   
    $message .= "\r\n\r\n Tel: ".$contact_number;
    $mail = mail($site_owners_email, $subject, $message, "From: " . $name . " <" . $email . ">\r\n"
            . "Reply-To: " . $email . "\r\n"
            . "X-Mailer: PHP/" . phpversion());
        	
    $result = array(
        'status' => 1,
        'text' => $alert_success
    );
} 

die(json_encode($result));
       