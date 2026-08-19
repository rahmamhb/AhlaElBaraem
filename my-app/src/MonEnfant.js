import { useState } from 'react'
import InfoPerso from './InfoPerso';
import InfoMedi from './InfoMedi';

const MonEnfant = () => {
    let [infoPerso, setInfoPerso] = useState(true);
    let [infoMedi, setInfoMedi] = useState(false);
    return (
        <div className="grid gap-8 px-4 py-8">
            <div className="flex flex-wrap justify-center gap-4">
                <button className={`w-full max-w-[400px] border-0 bg-white px-5 font-display text-2xl md:text-3xl ${infoPerso ? "text-primary" : "text-gray-mid"}`} onClick={() => { setInfoPerso(true); setInfoMedi(false); }}>Informations personnelles</button>
                <button className={`w-full max-w-[400px] border-0 bg-white px-5 font-display text-2xl md:text-3xl ${infoMedi ? "text-primary" : "text-gray-mid"}`} onClick={() => { setInfoPerso(false); setInfoMedi(true); }}>Informations médicales</button>
            </div>
            <div className="mx-auto w-full max-w-4xl px-4 md:px-[6rem]">
                {infoPerso && <InfoPerso></InfoPerso>}
                {infoMedi && <InfoMedi></InfoMedi>}
            </div>
        </div>
    );
}

export default MonEnfant;
