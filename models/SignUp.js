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
      date_ajout : {
        type : Date,
        required : true
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
        infos_medicales : {
            allergies : {
                type : [String]
              },
            medicaments : {
                type : [String]
              },
            conditions_medicales : {
                type : [String],
                default : ["bien"]  
              },
            vaccins : {
                type : [String],
                required : true  
              },
            antecedants_medicaux : {
                type : [String], 
              },
            instructions_speciales : {
                type : [String],  
              },
        },
        habitudes_alimentaires : {
            nutritionHabituelle : {
                type : String,
                required : true  
              },
            nutritionSeul : {
                type : String,
                required : true  
              },
            nutritionAvecAide : {
                type : String,
                required : true  
              },
            alimentsDetestes : {
                type : [String],
                required : true  
              },
            alimentsPreferes : {
                type : [String],
                required : true  
              },
            sonAppetit: {
                type : String,
                required : true  
              },
        },
        elimination : {
            independant : {
                type : String,
                required : true  
              },
            signaleDeBesoin : {
                type : String,  
              },
            elimination_intestinale : {
                type : String,
                required : true  
              },
            pot : {
                type : String,
                required : true  
              },
            joumeliere : {
                type : String,
                required : true  
              },
        },
        habitudes_deSommeil : {
            sieste : {
                type : String,
                required : true  
              },
            heure : {
                type : String,  
              },
            avecQui : {
                type : String, 
              },
            routineSommeil : {
                type : String,
                required : true  
              } 
        }
    }
}, { collection : "signUp"}
)

module.exports = mongoose.model("signUp", signUpSchema)