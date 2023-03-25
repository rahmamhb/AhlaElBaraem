import { useState } from "react";

import wave from "./assets/wave.png"
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"

import NavBar1 from "./NavBar1";
import "./Nourrice.css"
import ListEnfant from "./ListEnfants";
const Nourrice = () => {
    let [list , setList] = useState(true);
    let [comment , setComment] = useState(false);
    let [matiere , setMatiere] = useState(false);
    return ( 
        <div className="nourrice-page">
            <div className="nourHeader">
                <NavBar1></NavBar1>
                <div className="wave-top">
                    <img src={wave} alt="wave" className="wave"/>
                </div>
            </div>
            <div className="nour-menu">
                <button className={list? "active-btn" :""} onClick={()=>{setMatiere(false) ; setList(true);setComment(false)}}>liste des enfants</button>
                <button className={comment? "active-btn" :""} onClick={()=>{setMatiere(false) ; setList(false);setComment(true)}}>Commentaires</button>
                <button className={matiere? "active-btn mat-et-act" :"mat-et-act"} onClick={()=>{setMatiere(true) ; setList(false);setComment(false)}}>matieres et activitées</button>
            </div>
            
            <div className="content-container">
                <div className="wave-top">
                    <img src={waveTopWhite} alt="wave-top"></img>
                </div>
                <div className="nour-content">
                    {list && <ListEnfant></ListEnfant>}
                </div>
                <div className="wave-bottom">
                    <img src={waveBottomWhite} alt="wave-bottom"></img>
                 </div>
            </div>
        </div>
     );
}
 
export default Nourrice;