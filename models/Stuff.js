const mongoose = require("mongoose")

const stuffSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
    },
    prenom : {
        type : String,
        required : true
    },
    e_mail : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    }
}, { collection : "stuff"}
)

module.exports = mongoose.model("stuff", stuffSchema)
