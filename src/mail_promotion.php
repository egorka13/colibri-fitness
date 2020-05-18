<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

if(isset($_POST['user_name']) and isset($_POST['user_phone'])) {
  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];
  // $answer = $_POST['special_offer'];
  
  $name = htmlspecialchars($name);
  $name = urldecode($name);
  $name = trim($name);
  $phone = trim($phone);

  //$mail->SMTPDebug = 3;                               // Enable verbose debug output

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.yandex.ru';  			          // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'colibri.requests@yandex.ru';       // Ваш логин от почты с которой будут отправляться письма
  $mail->Password = 'colibri5738';                      // Ваш пароль от почты с которой будут отправляться письма
  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 465;                                    // TCP port to connect to / этот порт может отличаться у других провайдеров

  $mail->setFrom('colibri.requests@yandex.ru');           // от кого будет уходить письмо?
  $mail->addAddress('colibri-fitness@yandex.ru');         // Кому будет уходить письмо
  //$mail->addAddress('eashirobokov@gmail.com');               // Name is optional
  //$mail->addReplyTo('info@example.com', 'Information');
  //$mail->addCC('cc@example.com');
  $mail->addBCC('eashirobokov@gmail.com');
  //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
  //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
  $mail->isHTML(true);                                    // Set email format to HTML

  $mail->Subject = 'Заявка с сайта Colibri Fitness';
  $mail->Body    = '<p>Это сообщение было отправлено с помощью формы <b>"Онлайн тренировка бесплатно".</b></p><br /><p><b>' .$name . '</b> оставила заявку, её телефон: <b>' . $phone . '</b></p>';
  $mail->AltBody = '';

  if(!$mail->send()) {
      echo 'Error';
  } else {
      header('location: /');
  }
}
?>
