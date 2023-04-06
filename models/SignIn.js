const mongoose = require("mongoose")

const signInSchema = new mongoose.Schema({
    e_mail : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
}, { collection : "signIn"}
)

module.exports = mongoose.model("signIn", signInSchema)