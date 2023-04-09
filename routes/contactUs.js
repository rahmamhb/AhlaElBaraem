const express = require("express")
const routerContact = express.Router()
const nodemailer = require("nodemailer")


routerContact.get("/", (req, res) => {
    res.render("contactUs")
})

routerContact.post("/", (req, res) => {
    const { nom, email, message } = req.body;
  // configurer le transporteur 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dihiadahdah@gmail.com',
      pass: 'deyexszhixwjwigq' // c un mot de passe generé par google en activant la connexion en deux étapes et en créant un mot de passe d'applications 
    }
  });
   console.log(transporter)
  // Options de l'e-mail
  const mailOptions = {
    from: email,
    to: 'dihiadahdah@gmail.com',
    subject: `Nouveau message de ${nom}`,
    text: `Nom: ${nom}\n\nEmail: ${email}\n\nMessage:\n${message}`
  };
   console.log(mailOptions)
  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi du message');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.send('Message envoyé avec succès');
    }
  });
})

module.exports = routerContact;