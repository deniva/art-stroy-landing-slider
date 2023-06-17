<?php

$name = $_POST["name"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$mailMessage = <<< MSG
Имя:
{$name}

Телефон:
{$phone}

Сообщение:
{$message}
MSG;


if (mail("tehnokom-sveta@mail.ru", "АРТ-строй: сообщение с сайта", $mailMessage)) {
    header('Location: /?thanks=1');
    // http_response_code(200);
} else {
    http_response_code(500);
}
