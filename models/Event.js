const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    titre : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    photos : {
        type : String,
    },
    date : {
        type : Date,
        required : true
    },
    heure : {
        type : String,
        required : true
    }
}, { collection : "event"}
)

module.exports = mongoose.model("event", eventSchema)
