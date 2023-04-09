const express = require("express")
const mongoose = require("mongoose")
const stuffRouter = express.Router()
const Stuff = require("../models/Stuff")
const SignIn = require("../models/SignIn")
const {check, validationResult } = require('express-validator') //pour les verifications des form


// afficher tous le stuff
stuffRouter.get("/", async (req, res) => {
    const stuffs = await Stuff.find().sort({_id : -1}).select("-__v").lean()
    if(!stuffs){
        console.log("erreur")
       res.status(500).send('il nexiste rien'); 
    }
    res.render("stuffAffichage", {stuffs : stuffs})
})

// formulaire d'ajout
stuffRouter.get("/ajouter", (req, res) =>{
    res.render("stuffForm", {stuff : new Stuff()})
})
stuffRouter.post("/ajouter",  [
    check('nom').notEmpty().withMessage('Le champ Nom est obligatoire'),
    check('prenom').notEmpty().withMessage('Le champ Prenom est obligatoire'),
    check('e_mail').isEmail().withMessage('Le champ Email doit contenir une adresse email valide'),
    check('role').notEmpty().withMessage('Le champ Role est obligatoire'),
  ],async (req, res) => {
    const { nom, prenom, email, role, password } = req.body;
     const stuff = new Stuff({
        nom : nom,
        prenom : prenom,
        e_mail : email,
        role : role
     })
     const signIn = new SignIn({
        e_mail : email,
        password : password,
        role : role
     })
     try{
        await stuff.save()
        await signIn.save()
        console.log(stuff)
        console.log(signIn)
        res.redirect("/gestionDeLequipe")
        }catch{
       console.log("erreur")
       res.status(500).send("Erreur lors de l'ajout d'un élément à la base de données");
     }

})
// suppression
stuffRouter.get("/:id/supprimer", async (req, res) => {
    try {
        const stuff = await Stuff.findById(req.params.id)
        res.render("stuffSup", {stuff : stuff})
        }catch (err) {
            console.log("erreur", err);
            res.status(500).send("erreur lors de l'affichage des informations de l'enfant");
        }
})

stuffRouter.post("/:id/supprimer", async (req, res) => {
    try {
      await Stuff.deleteOne({_id : req.params.id})
      console.log("element supprimé")
      res.redirect("/gestionDeLequipe")
    }catch{
        console.log("erreur lors de la suppression")
        res.status(500).send("Erreur lors de la suppression de d'élément de la base de données");
    }
})


module.exports = stuffRouter