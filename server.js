require("dotenv").config()
const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser") // il rend les data du form ( json format ) utilisable facilement sous forme de js objects
const app = express()
const mongoose = require("mongoose")
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use("public", express.static("public"))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

// fonctions pour la connexion à mongodb
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI)
    }catch(err){
       console.log(err)
    }
}

connectDB()

mongoose.connection.once("open", () => {
    console.log("connected to MongoDB")
    app.listen(process.env.PORT || 8000, () => console.log("port 8000"))
})
mongoose.connection.on("error", err => {
    console.log(err)
})

// lier avec le route de gestion de l'equipe
const gestionDeLequipe = require("./routes/gestionDeLequipe")
app.use("/gestionDeLequipe", gestionDeLequipe)

// lier avec le route de gestion des enfants
const gestionDesEnfants = require("./routes/gestionDesEnfants")
app.use("/gestionDesEnfants", gestionDesEnfants)

//lier avec le route de gestion du site
const gestionDuSite = require("./routes/gestionDuSite")
app.use("/gestionDuSite", gestionDuSite)

//lier avec le route de contact us
const contactUs = require("./routes/contactUs")
app.use("/contactUs", contactUs)



