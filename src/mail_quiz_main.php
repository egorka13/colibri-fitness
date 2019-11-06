<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

if(isset($_POST['question_tabs_1']) and isset($_POST['question_tabs_2']) and isset($_POST['question_tabs_3']) and isset($_POST['question_tabs_4']) and isset($_POST['question_tabs_5']) and isset($_POST['user_phone_guest'])) {
  $question_tabs_1 = $_POST['question_tabs_1'];
  $question_tabs_2 = $_POST['question_tabs_2'];
  $question_tabs_3 = $_POST['question_tabs_3'];
  $question_tabs_4 = $_POST['question_tabs_4'];
  $question_tabs_5 = $_POST['question_tabs_5'];

  $phone = $_POST['user_phone_guest'];

  $phone = trim($phone);

  //$mail->SMTPDebug = 3;                               // Enable verbose debug output

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.yandex.ru';  					  // Specify main and backup SMTP servers
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
  $mail->Body    = 'Пользователь ответил на вопросы в квизе!<br /><ul><li>Вопрос 1 из 5: Занимались ли вы раньше в фитнес-клубах?<br />'. $question_tabs_1 . '</li><br /><li>Вопрос 2 из 5: Сколько раз в неделю вы планируете посещать фитнес-студию?<br />'. $question_tabs_2 . '</li><br /><li>Вопрос 3 из 5: В какое время вам удобнее заниматься?<br />'. $question_tabs_3 . '</li><br /><li>Вопрос 4 из 5: Что вам наиболее интересно?<br />'. $question_tabs_4 . '</li><br /><li>Вопрос 5 из 5: Как бы вы хотели тренироваться?<br />'. $question_tabs_5 . '</li></ul><br /><br /><b>Гость</b> оставил заявку, его телефон <b>' . $phone . '</b><br /><br />Это сообщение было сформировано автоматически.';
  $mail->AltBody = '';

  if(!$mail->send()) {
      echo 'Error';
  } else {
      header('location: /');
  }
}
?>
