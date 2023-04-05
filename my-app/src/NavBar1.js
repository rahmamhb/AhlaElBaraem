import './NavBar1.css';
import CrecheLogo from "./assets/logo.png"
import Logout from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const NavBar1 = ({showBtn}) => {
    let [show , setShow] = useState(showBtn);
    let [state , setState] = useState(true)
    return ( 
        <div className="Nav-bar1">
            <img src={CrecheLogo} alt="logo" className="logo"/>
            {state && <button onClick={()=>setState(false)} className='menu-icon'><MenuRoundedIcon></MenuRoundedIcon></button>}
            {!state && <button onClick={()=>setState(true)}className='menu-icon'><CloseRoundedIcon></CloseRoundedIcon></button>}
            <div className={state?"NavInfo" : "NavInfo active"}>
                <NavLink 
                    to="/"
                    className={({isActive})=>{return isActive? "active-nav-link":"nav-link"}}
                >
                    <p>Accueil</p>
                    <span></span>
                </NavLink>

                <NavLink 
                    to="/Programmes"
                    className={({isActive})=>{return isActive? "active-nav-link":"nav-link"}}
                > 
                    <p>Programmes</p>
                    <span></span>
                </NavLink>

                <NavLink 
                    to="/Annonces"
                    className={({isActive})=>{return isActive? "active-nav-link":"nav-link"}}
                >
                    <p>Annonces</p>
                    <span></span>
                </NavLink>
                <a href="#contact-us" className='nav-link'>

                    <p>Contactez nous</p>
                    <span></span>
                </a>
                
                {!show && 
                    <a href="/" className="ConnectButton nav-link">
                        <p>Se connecter</p>   
                    </a> 
                }
                
                {show && 
                    <div className='monCompte nav-link'>
                        <NavLink to="/" className={({isActive})=>{return isActive? "active-mon-compte ConnectButton":"monCompteButton"}}>

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