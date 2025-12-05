<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $message = htmlspecialchars($_POST['message']);
    $date = date('d/m/Y H:i:s');

    // Contenu de l'email de demande de devis
    $devis_email_content = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouvelle demande de devis!</title>
        <style>
            body { background-color: white; font-family: sans-serif; }
            .container { padding: 8px; }
            .logo { width: 50%; margin: 0 auto; }
            .section { border: 1px solid #e5e7eb; border-radius: 0.375rem; overflow: hidden; padding: 1rem; }
            .heading { text-align: center; font-weight: bold; }
            .text-lg { font-size: 1.125rem; }
            .text-brand { color: #007291; }
            .button { background-color: #1d4ed8; color: white; font-weight: bold; border: 1px solid #e5e7eb; cursor: pointer; border-radius: 0.375rem; padding: 0.75rem 2rem; text-align: center; text-decoration: none; }
            .footer { text-align: center; font-size: 0.75rem; color: #374151; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="section">
                <div class="heading">
                    <img class="logo" src="https://sani-web.com/logo_SaniWeb.png" alt="Logo">
                    <h2 class="text-4xl">Nouvelle demande de devis!</h2>
                    <h3 class="text-2xl">De ' . $name . ',</h3>
                </div>
                <p class="text-lg">Mail : <b>' . $email . '</b></p>
                <p class="text-lg">Téléphone : <b>' . $telephone . '</b></p>
                <p class="text-lg">Demande de devis</p>
                <p class="text-lg">Message : <b>' . $message . '</b></p>
                <p class="text-lg"><b>Date: </b>' . $date . '</p>
                <p class="text-lg">
                    <b>Service Client: </b>
                    <a href="mailto:contact@sani-web.com" class="text-brand">contact@sani-web.com</a>
                </p>
                <div class="heading">
                    <a href="https://sani-web.com" class="button">Voir le site</a>
                </div>
            </div>
            <p class="footer">© 2024 | Sani-web., 3 Sq Saint-Pasquier, 44000 Nantes, France FR | www.sani-web.com</p>
        </div>
    </body>
    </html>';

    // Contenu de l'email de confirmation
    $confirmation_email_content = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Merci pour votre demande de devis!</title>
        <style>
            body { background-color: white; font-family: sans-serif; }
            .container { padding: 8px; }
            .logo { width: 50%; margin: 0 auto; }
            .section { border: 1px solid #e5e7eb; border-radius: 0.375rem; overflow: hidden; padding: 1rem; }
            .heading { text-align: center; font-weight: bold; }
            .text-lg { font-size: 1.125rem; }
            .text-brand { color: #007291; }
            .button { background-color: #1d4ed8; color: white; font-weight: bold; border: 1px solid #e5e7eb; cursor: pointer; border-radius: 0.375rem; padding: 0.75rem 2rem; text-align: center; text-decoration: none; }
            .footer { text-align: center; font-size: 0.75rem; color: #374151; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="section">
                <div class="heading">
                    <img class="logo" src="https://sani-web.com/logo_SaniWeb.png" alt="Logo">
                    <h2 class="text-4xl">Merci pour votre demande de devis!</h2>
                </div>
                <p class="text-lg">Nous avons bien reçu votre demande de devis</p>
                <p class="text-lg">Un conseiller vous contactera dans les plus brefs délais pour vous fournir un devis personnalisé.</p>
                <p class="text-lg"><b>Date: </b>' . $date . '</p>
                <p class="text-lg">Si vous êtes à l\'origine de cette demande, vous n\'avez rien d\'autre à faire.</p>
                <p class="text-lg">Si vous n\'êtes pas à l\'origine de cette demande, veuillez contacter notre service client à l\'adresse suivante</p>
                <p class="text-lg">
                    <b>Service Client: </b>
                    <a href="mailto:contact@sani-web.com" class="text-brand">contact@sani-web.com</a>
                </p>
                <div class="heading">
                    <a href="https://sani-web.com" class="button">Voir le site</a>
                </div>
            </div>
            <p class="footer">© 2024 | Sani-web., 3 Sq Saint-Pasquier, 44000 Nantes, France FR | www.sani-web.com</p>
        </div>
    </body>
    </html>';

    // En-têtes de l'email
    $headers = "From: contact@sani-web.com\r\n";
    $headers .= "Reply-To: contact@sani-web.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Envoi des emails
    $to_admin = "contact@sani-web.com";
    $subject_admin = "Nouvelle demande de devis de " . $name;

    $to_client = $email;
    $subject_client = "Confirmation de réception de votre demande de devis";

    if (mail($to_admin, $subject_admin, $devis_email_content, $headers) && mail($to_client, $subject_client, $confirmation_email_content, $headers)) {
        echo "Merci, votre demande de devis a été envoyée.";
    } else {
        echo "Désolé, une erreur s'est produite lors de l'envoi de votre demande de devis.";
    }
}
?>
