import React from 'react';
import NavBar1 from "./NavBar1";
import wave from "./assets/wave.png"
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"
import { useState } from 'react'
import Compétence from './Compétence';
import Messagerie from './Messagerie';
import MonEnfant from './MonEnfant';
import CetteSemaine from './CetteSemaine';
import Footer from './Footer';

const Parent = () => {
    let [cettesemaine, setCetteSemaine] = useState(true);
    let [compétence, setCompétence] = useState(false);
    let [messagerie, setMessagerie] = useState(false);
    let [monenfant, setMonenfant] = useState(false);

    const tabClass = (active) => `border-r-2 border-gray-mid px-5 font-poppins text-lg ${active ? "font-semibold text-primary" : "text-gray-mid"}`;

    return (
        <div className="grid w-full">
            <div className="relative">
                <NavBar1></NavBar1>
                <img src={wave} alt="wave" className="w-full"/>
            </div>

            <div className="mx-auto -mt-8 grid w-fit grid-flow-col rounded-full bg-white px-5 py-4 shadow-md">
                <button className={tabClass(cettesemaine)} onClick={() => { setCetteSemaine(true); setCompétence(false); setMessagerie(false); setMonenfant(false); }}>cette semaine</button>
                <button className={tabClass(compétence)} onClick={() => { setCetteSemaine(false); setCompétence(true); setMessagerie(false); setMonenfant(false); }}>compétences</button>
                <button className={tabClass(messagerie)} onClick={() => { setCetteSemaine(false); setCompétence(false); setMessagerie(true); setMonenfant(false); }}>messagerie</button>
                <button className={`px-5 font-poppins text-lg ${monenfant ? "font-semibold text-primary" : "text-gray-mid"}`} onClick={() => { setCetteSemaine(false); setCompétence(false); setMessagerie(false); setMonenfant(true); }}>mon enfant</button>
            </div>

            <div className="relative mt-6 bg-white">
                {(monenfant || cettesemaine) && <img src={waveTopWhite} alt="wave-top" className="absolute inset-x-0 top-0 w-full -translate-y-full"/>}
                <div className="bg-white py-6">
                    {cettesemaine && <CetteSemaine></CetteSemaine>}
                    {compétence && <Compétence></Compétence>}
                    {messagerie && <Messagerie></Messagerie>}
                    {monenfant && <MonEnfant></MonEnfant>}
                </div>
                {(monenfant || cettesemaine) && <img src={waveBottomWhite} alt="wave-bottom" className="absolute inset-x-0 bottom-0 w-full translate-y-full"/>}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Parent;
