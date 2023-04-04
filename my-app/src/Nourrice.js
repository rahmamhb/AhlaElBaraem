import { useState } from "react";
import wave from "./assets/wave.png"
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"


import "./Nourrice.css"
import NavBar1 from "./NavBar1";
import ListEnfant from "./ListEnfants";
import NourriceComment from "./Comment";
import Matiere from "./Matiere";

const MatieresData = [
    {
        matiereName :"Dessin",
        color:"255 181 133",
        activities : ["Dessin libre","Dessin avec des objets","Dessin à partir d'une histoire","Dessin de portraits"],

    },
    {
        matiereName :"Math",
        color:"255 231 148",
        activities : [],

    },
    {
        matiereName :"educ civil",
        color:"255 72 72",
        activities : [],

    },
    {
        matiereName :"educ islamic",
        color:"154 219 255",
        activities : [],

    },
    {
        matiereName :"arabe",
        color:"255 189 167",
        activities : [],

    },
    {
        matiereName :"francais",
        color:"255 153 0",
        activities : [],

    },
]
let CommentData = [
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    }
]

const Nourrice = () => {
    let [list , setList] = useState(false);
    let [comment , setComment] = useState(false);
    let [matiere , setMatiere] = useState(true);
    return ( 
        <div className="nourrice-page">
            <div className="nourHeader"> {/*in the header section i put the navBar and the wave*/}
                <NavBar1 showBtn={true}></NavBar1>
                <div className="wave-top">
                    <img src={wave} alt="wave" className="wave"/>
                </div>
            </div>
            <div className="nour-menu"> {/*adi ani drt fiha adik ta3 list des enfants w commentaires w matiere w activites ntiya ak tbdlihm b gestion d'equipe gestion des enfant w gestion du site*/}
                <button className={list? "active-btn" :""} onClick={()=>{setMatiere(false) ; setList(true);setComment(false)}}>liste des enfants</button>
                <button className={comment? "active-btn" :""} onClick={()=>{setMatiere(false) ; setList(false);setComment(true)}}>Commentaires</button>
                <button className={matiere? "active-btn mat-et-act" :"mat-et-act"} onClick={()=>{setMatiere(true) ; setList(false);setComment(false)}}>matieres et activitées</button>
            </div>
            
            <div className="content-container"> {/* w ada l container tkhali fih adou les waves*/}
                <div className="wave-top"> {/*l wave adi */}
                    <img src={waveTopWhite} alt="wave-top"></img>
                </div>
                <div className="nour-content"> {/*wtbdli hnaya 3la hssab la page ta3k*/}
                    {list && <ListEnfant MatierData={MatieresData}></ListEnfant>}
                    {comment && <NourriceComment data={CommentData}></NourriceComment>}
                    {matiere && <Matiere data={MatieresData}></Matiere>}
                </div>
                <div className="wave-bottom"> {/*wl wave adi */}
                    <img src={waveBottomWhite} alt="wave-bottom"></img>
                 </div>
            </div>
        </div>
     );
}
 
export default Nourrice;