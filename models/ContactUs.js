const mongoose = require("mongoose")

const contactUsSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true,
    },
    e_mail : {
        type : String,
        required : true
    },
    message : {
        type : String,
    }
}, { collection : "contactUs"}
)

module.exports = mongoose.model("contactUs", contactUsSchema)
