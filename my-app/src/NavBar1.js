import './NavBar1.css';
import CrecheLogo from "./assets/logo.png"
import { NavLink } from 'react-router-dom';
const NavBar1 = () => {
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
                <a href="/" className="ConnectButton">
                    <p>Se connecter</p>   
                </a>
            </div>
        </div>
     );
}
 
export default NavBar1;