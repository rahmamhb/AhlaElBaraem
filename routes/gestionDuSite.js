const express = require("express")
const mongoose = require("mongoose")
const multer = require("multer")
const upload = multer({ dest: 'public/uploads/' });
const siteRouter = express.Router()
const {check, validationResult } = require('express-validator')
const Menu = require("../models/Menu")
const Event = require("../models/Event")
const Recrutement = require("../models/Recrutement")
const SignUp = require("../models/SignUp")
const Enfants = require("../models/Enfants")
const Parents = require("../models/Parents")
const SignIn = require("../models/SignIn")
const ContactUs = require("../models/ContactUs")
const nodemailer = require("nodemailer")




//verifications des formulaires 
function verifMenu(req, res, next) {[
    check("jour").notEmpty().withMessage('Le champ jour est obligatoire'),
    check("repas_01").notEmpty().withMessage('Le champ repas_01 est obligatoire'),
    check("repas_02").notEmpty().withMessage('Le champ repas_02 est obligatoire'),
    check("repas_03").notEmpty().withMessage('Le champ repas_03 est obligatoire'),
], next()}
function verifEvent(req, res, next) {[
    check("titre").notEmpty().withMessage('Le champ titre est obligatoire'),
    check("description").notEmpty().withMessage('Le champ description est obligatoire'),
    check("date").isDate().withMessage('Le champ date est obligatoire'),
    check("heure").notEmpty().withMessage('Le champ heure est obligatoire'),
], next()}
function verifRecrutement(req, res, next) {[
    check("titre").notEmpty().withMessage('Le champ titre est obligatoire'),
    check("description").notEmpty().withMessage('Le champ description est obligatoire'),
    check("date").isDate().withMessage('Le champ date est obligatoire'),
    check("heure").notEmpty().withMessage('Le champ heure est obligatoire'),
], next()}
function ajouterDemande(req, res, next){
  console.log("we are starting")
  next()
}



// retourner la page
siteRouter.get("/", async (req, res) =>{
  const signUp = await SignUp.find().sort({_id : -1}).select("-__v").lean()
  const contactUs = await ContactUs.find().sort({_id : -1}).select("-__v").lean()
  if(!signUp || !contactUs){
    console.log("erreur")
    res.status(500).send('il nexiste rien'); 
 }
    res.render("siteAffichage", {contactUs : contactUs , signUp : signUp})
})

// les messages
     //retourner la page de reponse 
     siteRouter.get("/:id/repondre",async (req, res) => {
      try {
        res.render("repondre")
        }catch (err) {
            console.log("erreur", err);
            res.status(500).send("erreur lors de l'affichage des informations de l'enfant");
        }
  })
      //envoyer la reponse
  siteRouter.post("/:id/repondre", async (req, res) => { // j'ai utilisé le post pour le delete et le boutton est dans un form
    try{
      const contactUs = await ContactUs.findById(req.params.id)
       //supprimer le message de la collection
    await ContactUs.findByIdAndDelete(req.params.id)
    console.log("message supprimé")
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
    from: contactUs.e_mail,
    to: 'dihiadahdah@gmail.com',
    subject: `Nouveau message de ${contactUs.nom}`,
    text: `Nom: ${contactUs.nom}\n\nEmail: ${contactUs.e_mail}\n\nMessage:\n${contactUs.message}`
  };
   console.log(mailOptions)
  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi du message');
    } else {
      console.log("E-mail envoyé");
    }
      res.redirect("/gestionDuSite")
    })
    }catch (err) {
      console.log("erreur", err);
      res.status(500).send("erreur lors de l'affichage des informations de l'enfant");
  }
  })
// les demandes
     //supprimer une demande 
     siteRouter.get("/:id/supprimer",async (req, res) => {
      try {
        const signUp = await SignUp.findById(req.params.id)
        res.render("demandeSup", {signUp : signUp})
        }catch (err) {
            console.log("erreur", err);
            res.status(500).send("erreur lors de l'affichage des informations de l'enfant");
        }
  })
  
  siteRouter.post("/:id/supprimer", async (req, res) => { // j'ai utilisé le post pour le delete et le boutton est dans un form
      console.log("start")
      console.log(req.params.id)
      try {
        await SignUp.findOneAndDelete({_id : req.params.id})
        console.log("element supprimé")
        res.redirect("/gestionDuSite")
      }catch{
          console.log("erreur lors de la suppression")
          res.status(500).send("Erreur lors de la suppression de d'élément de la base de données");
      }
  })


// formulaires d'ajout
siteRouter.post('/', upload.fields([{ name: 'photo' }, { name: 'titre' }, { name: 'description' }, { name: 'date' }, { name: 'heure' }]),  function(req, res) {
  var formId = req.body.formId; // Récupération de l'ID du formulaire en passant ce dernier comme input hidden dans le form
  console.log(formId)
  switch (formId) {
    case 'formMenu': // ajout d'un menu
      verifMenu(req, res,  
      async () => {
          const { jour, repas01, repas02, repas03 } = req.body;
          try{
              switch(jour){
                  case "dimanche": 
                  await Menu.updateMany({}, {$set : {dimanche : {repas_01 : repas01, repas_02 : repas02, repas_03 : repas03}}} )
                  break;
                  case "lundi": 
                  await Menu.updateMany({}, {$set : {lundi : {repas_01 : repas01, repas_02 : repas02, repas_03 : repas03}}} )
                  break;
                  case "mardi": 
                  await Menu.updateMany({}, {$set : {mardi : {repas_01 : repas01, repas_02 : repas02, repas_03 : repas03}}} )
                  break;
                  case "mercredi": 
                  await Menu.updateMany({}, {$set : {mercredi : {repas_01 : repas01, repas_02 : repas02, repas_03 : repas03}}} )
                  break;
                  case "jeudi": 
                  await Menu.updateMany({}, {$set : {jeudi : {repas_01 : repas01, repas_02 : repas02, repas_03 : repas03}}} )
                  break;
              }
             res.redirect("/gestionDuSite/succes")
             console.log("success menu")
             }catch{
            console.log("erreur")
            res.status(500).send('Erreur lors de l\'ajout d\'un élément à la base de données');
          }})
      break;
    case 'formEvent' : //ajout event
      verifEvent(req, res,
          async() => {
            try {
                  console.log(req.body)
                  console.log(req.files);
                  const event = new Event({
                    titre: req.body.titre,
                    description: req.body.description,
                    date: req.body.date,
                    heure: req.body.heure,
                    photos: req.files.photo[0].path
                  })
                  console.log(event)
                  event.save();
                  console.log("Event saved successfully");
                  res.redirect("/gestionDuSite/succes")
                  }catch{
                 console.log("erreur")
                 res.status(500).send("Erreur lors de l'ajout d'un élément à la base de données");
               }
      })
      break;
    case 'formRecrutement': //ajout recrutement
      verifRecrutement(req, res,
          async() => {
              const { titre, description, date, heure } = req.body;
              const recrutement = new Recrutement({
                  titre : titre,
                  description : description,
                  date : date,
                  heure : heure
               })
               try{
                  console.log(recrutement)
                  await recrutement.save()
                  res.redirect("/gestionDuSite/succes")
                  console.log("succes recrutement")
                  }catch{
                 console.log("erreur")
                 res.status(500).send("Erreur lors de l'ajout d'un élément à la base de données");
               }
      })
      break;
      case "demande" : //gestion des demandes
        ajouterDemande(req, res, 
      async () => {
        const { id } = req.body; //on travail avec les name des elements html 
         const demande = await SignUp.findById(id)
         try{
          //ajout au signIn
          const signIn = new SignIn({
             e_mail : demande.e_mail,
             role : "parent",
             password : demande.password
          })
          await signIn.save()
          console.log("succes sign in")
          //ajout aux parents 
          const parent = new Parents({
            num_tel : demande.informations.infos_personnelles.parents.num_tel,
            nbr_enfants : demande.informations.infos_personnelles.parents.nbr_enfants,
            pere : {
              prenom : demande.informations.infos_personnelles.parents.pere.prenom,
              profession : demande.informations.infos_personnelles.parents.pere.profession,
            }, 
            mere : {
              nom : demande.informations.infos_personnelles.parents.mere.nom,
              prenom : demande.informations.infos_personnelles.parents.mere.prenom,
              profession : demande.informations.infos_personnelles.parents.mere.profession
            }
          })
          await parent.save()
          console.log("succes parent")
          // ajout aux enfants 
          const enfant = new Enfants({
            nom : demande.nom,
            prenom : demande.prenom,
            e_mail : demande.e_mail,
            age : demande.age,
            informations : {
              infos_personnelles : {
                sexe : demande.informations.infos_personnelles.sexe,
                dateDeNaissance : demande.informations.infos_personnelles.dateDeNaissance,
                adresse : demande.informations.infos_personnelles.adresse,
                nbrFreres : demande.informations.infos_personnelles.nbrFreres,
                parents : parent.id        
              },
            }
          })
          console.log(enfant)
          await enfant.save()
          console.log("succes enfant")
          // supprimer la demande 
          await SignUp.findByIdAndDelete(id)
          console.log("succes suppression signUp")
          //envoie du mail 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dihiadahdah@gmail.com',
        pass: 'deyexszhixwjwigq' 
      }
    });
    const mailOptions = {
      from: 'dihiadahdah@gmail.com',
      to: signIn.e_mail,
      subject: `Inscription accepté`,
      text: `Nous vous informons que la gérante de notre crèche a accepté votre demande d'inscription au site AhlaElBaraem, vous pouvez vous connecter à tout moment en utilisant votre adresse email et votre mot de passe`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Erreur lors de l\'envoi du message');
      } else {
        console.log('E-mail envoyé: ' + info.response);
        res.send('Message envoyé avec succès');
      }
    });
          //redirection
          res.redirect("/gestionDuSite/succes")
         }catch {
          console.log("erreur")
          res.status(500).send('Erreur lors de l\'ajout d\'un élément à la base de données');
         }
  })
      break;
    default:
      console.log("erreur d'id")
      res.status(500).send('Erreur')
      break;
  }
});

// le get du succes 
siteRouter.get("/succes", async (req, res) =>{
  res.render("siteSucces")
})





module.exports = siteRouter