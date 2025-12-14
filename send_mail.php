<?php
// Configuration
$to_email = "maelbouviersobrino@hotmail.com";
$subject_prefix = "Nouveau message depuis le formulaire de contact";

// Vérifier si la requête est POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer et nettoyer les données du formulaire
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));
    
    // Validation
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "Le nom est requis.";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Une adresse email valide est requise.";
    }
    
    if (empty($message)) {
        $errors[] = "Le message est requis.";
    }
    
    // Si pas d'erreurs, envoyer l'email
    if (empty($errors)) {
        
        // Préparer le sujet et le contenu de l'email
        $subject = "$subject_prefix - Message de $name";
        
        $email_content = "Nom: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        
        // En-têtes de l'email
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Envoyer l'email
        if (mail($to_email, $subject, $email_content, $headers)) {
            // Redirection vers une page de succès ou message de confirmation
            header("Location: index.html?success=1");
            exit;
        } else {
            $error_message = "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.";
        }
        
    } else {
        $error_message = implode("<br>", $errors);
    }
    
} else {
    // Rediriger si on accède directement au script
    header("Location: index.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erreur - Envoi du message</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .error-box {
            background-color: #f8d7da;
            color: #721c24;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #f5c6cb;
        }
        .back-link {
            display: inline-block;
            margin-top: 20px;
            color: #007bff;
            text-decoration: none;
        }
        .back-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="error-box">
        <h2>Erreur</h2>
        <p><?php echo $error_message; ?></p>
        <a href="index.html" class="back-link">← Retour au formulaire</a>
    </div>
    <script>
        // Afficher un message de succès si le paramètre est présent
        if (window.location.search.includes('success=1')) {
            alert('Votre message a été envoyé avec succès !');
            // Ou créez une notification plus élégante
        }
    </script>
</body>
</html>