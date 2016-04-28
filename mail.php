<?php

$recepient = 'suturmenkosasha1996@gmail.com';
$sitename = 'Suturmenko';

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$mess = trim($_POST['mess']);
$messege = 'Имя: $name \nEmail: $email \n Текст: $mess';


$pagetitle = 'Новая заявка с сайта \"$sitename" ';

mail($recepient,
    $pagetitle,
    $messege,
    'Content-type: text/plain; charset=\"utf-8\"\n From: $recepient');

?>