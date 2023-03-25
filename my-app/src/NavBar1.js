import './NavBar1.css';
import CrecheLogo from "./assets/logo.png"
import Logout from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const NavBar1 = () => {
    let [show , setShow] = useState(true);
    return ( 
        <div className="Nav-bar1">
            <img src={CrecheLogo} alt="logo" className="logo"/>
            <div className="NavInfo">
                <NavLink 
                    to="/"
                    className={({isActive})=>{return isActive? "active-nav-link":""}}
                >
                    <p>Accueil</p>
                    <span></span>
                </NavLink>
                <NavLink 
                    to="/Programmes"
                    className={({isActive})=>{return isActive? "active-nav-link":""}}
                > 
                    <p>Programmes</p>
                    <span></span>
                </NavLink>

                <NavLink 
                    to="/Annonces"
                    className={({isActive})=>{return isActive? "active-nav-link":""}}
                >
                    <p>Annonces</p>
                    <span></span>
                </NavLink>
                <a href="#contact-us">
                    <p>Contactez nous</p>
                    <span></span>
                </a>
                
                {!show && 
                    <a href="/" className="ConnectButton">
                        <p>Se connecter</p>   
                    </a> 
                }
                
                {show && 
                    <div className='monCompte'>
                        <NavLink to="/Nourrice" className={({isActive})=>{return isActive? "active-mon-compte ConnectButton":"monCompteButton"}}>
                            <p>Mon Compte</p>   
                        </NavLink>
                        <button onClick={()=>{setShow(false)}}><Logout></Logout></button>
                    </div> 
               }
            </div>
        </div>
     );
}
 
export default NavBar1;