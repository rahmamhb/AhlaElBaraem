const mongoose = require("mongoose")

const signUpSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true 
    },
    prenom : {
        type : String,
        required : true 
    },
    e_mail : {
        type : String,
        required : true 
    },
    age : {
        type : Number
      },
    password : {
        type : String,
        required : true
      },
    informations : {
        infos_personnelles : {
            sexe : {
              type : String,
              required : true  
            },
            dateDeNaissance : {
              type : Date,
              required : true  
            },
            parents : {
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
            },
            adresse : {
              type : String,
              required : true  
            },
            nbrFreres : {
              type : Number,
              required : true  
            },
            photo : {
              data : Buffer,
              contenttype : String
            }
        },      
    }
}, { collection : "signUp"}
)

module.exports = mongoose.model("signUp", signUpSchema)