<?php

$quebra_linha = "\n";
// Passando os dados obtidos pelo formulário para as variáveis abaixo
$nomeremetente     = $_POST['nome'];
$emailremetente    = trim($_POST['email']);
//$emaildestinatario = trim($_POST['abruno36@gmail.com']);
$assunto           = $_POST['assunto'];
$mensagem          = $_POST['mensagem'];

$corpoemail = "<strong>Nome: </strong>".$_POST['nome']." \n";
//email que o usuário preencheu
$corpoemail .= "<br><strong>Email: </strong>".$_POST['email']." \n";
$corpoemail .= "<br><strong>Celular: </strong>".$_POST['celular']." \n";
$corpoemail .= "<br><strong>Assunto: </strong>".$_POST['assunto']." \n";
$corpoemail .= "<br><strong>Mensagem: </strong>". $_POST['mensagem'];
$headers = "";
//email do seu domínio hospedado
$emailsender = "contato@techpcsites.com";
//email de quem vai receber
$emaildestinatario = "contato@techpcsites.com";
$assunto = "Mensagem de contato do site - " .$_POST['nome'];

/* Montando o cabeçalho da mensagem */
$headers = "MIME-Version: 1.1".$quebra_linha;
$headers .= "Content-type: text/html; charset=iso-8859-1".$quebra_linha;
// Perceba que a linha acima contém "text/html", sem essa linha, a mensagem não chegará formatada.
$headers .= "From: ".$emailremetente.$quebra_linha;
$headers .= "Return-Path: " . $emailsender . $quebra_linha;


/* Enviando a mensagem */
$status = mail($emaildestinatario, $assunto, $corpoemail, $headers, "-r". $emailsender);

if($status) {
        echo "<script> alert('Mensagem enviada com sucesso.</br>Em breve entraremos em contato!'); </script>"; //verifica se foi enviado o email com sucesso.
    }
    else {
        echo "<script> alert('Falha ao enviar a mensagem!'); </script>"; //se houve algum erro de envio.
    }

    echo "<script> window.location.href = 'https://www.techpcsites.com'; </script>"; //aqui você coloca uma página que será redirecionada após o envio do formulário.
    
?>