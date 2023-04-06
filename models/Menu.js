const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    dimanche : {
        repas_01 : {
            type : String,
        },
        repas_02 : {
            type : String,
        },
        repas_03 : {
            type : String,
        }
    },
    lundi : {
        repas_01 : {
            type : String,
        },
        repas_02 : {
            type : String,
        },
        repas_03 : {
            type : String,
        }
    },
    mardi : {
        repas_01 : {
            type : String,
        },
        repas_02 : {
            type : String,
        },
        repas_03 : {
            type : String,
        }
    },
    mercredi : {
        repas_01 : {
            type : String,
        },
        repas_02 : {
            type : String,
        },
        repas_03 : {
            type : String,
        }
    },
    jeudi : {
        repas_01 : {
            type : String,
        },
        repas_02 : {
            type : String,
        },
        repas_03 : {
            type : String,
        }
    },
}, { collection : "menu"}
)

module.exports = mongoose.model("menu", menuSchema)