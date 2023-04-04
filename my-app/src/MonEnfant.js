import {useState} from 'react'
import './MonEnfant.css'
import InfoPerso from './InfoPerso';
import InfoMedi from './InfoMedi';

const MonEnfant = () => {
    let [infoPerso , setInfoPerso] = useState(true);
    let [infoMedi , setInfoMedi] = useState(false);
    return ( 
        <div className='profile'>
            <div className='profile-menu'>
                <button className={infoPerso? "active-btn" :"not-active-btn"} onClick={()=>{setInfoPerso(true) ; setInfoMedi(false)}}>Informations personnelles</button>
                <button className={infoMedi? "active-btn" :"not-active-btn"} onClick={()=>{setInfoPerso(false) ; setInfoMedi(true)}}>Informations médicales</button>
            </div>
            <div className="profile-content">
                    {infoPerso && <InfoPerso></InfoPerso>}
                    {infoMedi && <InfoMedi></InfoMedi>}
                </div>
        </div>
     );
}
 
export default MonEnfant;