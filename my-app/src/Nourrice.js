import { useState } from "react";

import wave from "./assets/wave.png"
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"


import "./Nourrice.css"
import NavBar1 from "./NavBar1";
import ListEnfant from "./ListEnfants";
import NourriceComment from "./NourriceComment";
import Matiere from "./Matiere";
const Nourrice = () => {
    let [list , setList] = useState(true);
    let [comment , setComment] = useState(false);
    let [matiere , setMatiere] = useState(false);
    return ( 
        <div className="nourrice-page">
            <div className="nourHeader"> {/*in the header section i put the navBar and the wave*/}
                <NavBar1></NavBar1>
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
                    {list && <ListEnfant></ListEnfant>}
                    {comment && <NourriceComment></NourriceComment>}
                    {matiere && <Matiere></Matiere>}
                </div>
                <div className="wave-bottom"> {/*wl wave adi */}
                    <img src={waveBottomWhite} alt="wave-bottom"></img>
                 </div>
            </div>
        </div>
     );
}
 
export default Nourrice;