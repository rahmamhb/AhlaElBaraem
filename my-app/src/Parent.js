import React from 'react';
import NavBar1 from "./NavBar1";
import wave from "./assets/wave.png"
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"
import {useState} from 'react'
import './Parent.css'
import Compétence from './Compétence';
import Messagerie from './Messagerie';
import MonEnfant from './MonEnfant';
import CetteSemaine from './CetteSemaine';
import Footer from './Footer';




const Parent = () => {
    let [cettesemaine , setCetteSemaine] = useState(true);
    let [compétence , setCompétence] = useState(false);
    let [messagerie , setMessagerie] = useState(false);
    let [monenfant , setMonenfant] = useState(false);
    return ( 
        <div className="parent-page">
            <div className="Header"> 
                <NavBar1></NavBar1>
                <div className="wave-top1">
                    <img src={wave} alt="wave" className="wave"/>
                </div>
            </div>

            <div className="parent-menu">
                <button className={cettesemaine? "active-btn" :""} onClick={()=>{setCetteSemaine(true) ; setCompétence(false);setMessagerie(false) ; setMonenfant(false)}}>cette semaine</button>
                <button className={compétence? "active-btn" :""} onClick={()=>{setCetteSemaine(false) ; setCompétence(true);setMessagerie(false) ; setMonenfant(false)}}>compétences</button>
                <button className={messagerie? "active-btn" :""} onClick={()=>{setCetteSemaine(false) ; setCompétence(false);setMessagerie(true) ; setMonenfant(false)}}>messagerie</button>
                <button className={monenfant? "active-btn lastone" :"lastone"} onClick={()=>{setCetteSemaine(false) ; setCompétence(false);setMessagerie(false) ; setMonenfant(true)}} >mon enfant</button>
            </div>

            <div className="content-container">
                <div className="wave-top">
                    <img src={waveTopWhite} alt="wave-top"></img>
                </div>
                <div className="parent-content">
                    {cettesemaine && <CetteSemaine></CetteSemaine>}
                    {compétence && <Compétence></Compétence>}
                    {messagerie && <Messagerie></Messagerie>}
                    {monenfant && <MonEnfant></MonEnfant>}
                </div>
                <div className="wave-bottom">
                    <img src={waveBottomWhite} alt="wave-bottom"></img>
                 </div>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Parent;