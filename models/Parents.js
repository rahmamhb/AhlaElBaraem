const mongoose = require("mongoose")

const parentsSchema = new mongoose.Schema({
    nbr_enfants : {
       type : Number,
       required : true,
    },
    num_tel : {
      type : Number,
      required : true
    },
    pere : {
      prenom : {
        type : String,
        required : true
      },
      profession : {
        type : String,
        required : true
      }
    },
    mere : {
        nom : {
            type : String,
            required : true
        },
        prenom : {
            type : String,
            required : true
          },
        profession : {
            type : String,
            required : true
          }
    }
}, { collection : "parents"}
)

module.exports = mongoose.model("Parents", parentsSchema)