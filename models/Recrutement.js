const mongoose = require("mongoose")

const recrutementSchema = new mongoose.Schema({
    titre : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    heure : {
        type : String,
        required : true
    }
}, { collection : "recrutement"}
)

module.exports = mongoose.model("recrutement", recrutementSchema)
