const express = require("express")
const mongoose = require("mongoose")
const enfantRouter = express.Router()
const Enfants = require("../models/Enfants")
const Parents = require("../models/Parents")
const path = require("path")

// afficher tous les enfants
enfantRouter.get("/", async (req, res) => {
    const enfants = await Enfants.find().sort({_id : -1}).select("-__v").lean() //select pour ne pas retourne le champ et lean pour ne pas retourner les infos supplémentaires
    if(!enfants){
       console.log("erreur")
       res.status(500).send('il nexiste rien'); 
    }
    res.render("enfantsAffichage", {enfants : enfants})
})

// suppression
enfantRouter.get("/:id/supprimer", async (req, res) => {
    try {
    const enfant = await Enfants.findById(req.params.id)
    res.render("enfantsSup", {enfant : enfant})
    }catch (err) {
        console.log("erreur", err);
        res.status(500).send("erreur lors de l'affichage des informations de l'enfant");
    }
})

enfantRouter.post("/:id/supprimer", async (req, res) => { // j'ai utilisé le post pour le delete et le boutton est dans un form
    console.log(req.params.id)
    try {
        const enfant = await Enfants.findById(req.params.id)
        await Parents.findByIdAndDelete(enfant.informations.infos_personnelles.parents)
        await Enfants.findByIdAndDelete(req.params.id)
      console.log("element supprimé")
      res.redirect("/gestionDesEnfants")
    }catch{
        console.log("erreur lors de la suppression")
        res.status(500).send("Erreur lors de la suppression de d'élément de la base de données");
    }
})

//modifier le numero de telephone
enfantRouter.post("/:id/informations", async (req, res) => {
    try {
        const enfant = await Enfants.findById(req.params.id);
        await Parents.findByIdAndUpdate({_id : enfant.informations.infos_personnelles.parents}, {$set : {num_tel : req.body.num}})
        console.log("update succes")
        const parent = await Parents.findById(enfant.informations.infos_personnelles.parents)
        console.log(parent)
        res.redirect("/gestionDesEnfants/" + req.params.id + "/informations")
    } catch (err) {
        console.log("erreur", err);
        res.status(500).send("erreur lors de l'affichage des informations de l'enfant");
    }
})

// afficher les informations de l'enfants
enfantRouter.get("/:id/informations", async (req, res) => {
    
    try {
        const enfant = await Enfants.findById(req.params.id);
        const parent = await Parents.findById(enfant.informations.infos_personnelles.parents);
        res.render("enfantsInformations", { enfant: enfant, parent: parent });
    } catch (err) {
        console.log("erreur", err);
        res.status(500).send("erreur lors de l'affichage des informations de l'enfant");
    }
});



module.exports = enfantRouter
console.log("start");
