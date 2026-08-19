import { BRANDING } from "./config/branding";
import Logout from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAuth } from './context/AuthContext';
import { roleHomePath } from './routes/roleHome';

const navLinkClass = ({ isActive }) =>
    `relative grid w-fit grid-rows-[auto_auto] font-poppins text-lg text-white after:mt-1 after:block after:h-1 after:rounded-md after:bg-accent-yellow after:transition-all after:duration-500 ${
        isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

const NavBar1 = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <div className="relative flex w-full items-center justify-between bg-primary px-5 py-5 lg:px-14 lg:py-6">
            <a href="/" className="flex items-center gap-2">
                <img src={BRANDING.logo} alt={BRANDING.institutionName} className="h-[60px] w-[60px] lg:h-[74px] lg:w-[74px]"/>
                <span className="font-display text-2xl text-white">{BRANDING.institutionName}</span>
            </a>

            <button onClick={() => setMenuOpen((v) => !v)} className="border-0 bg-primary text-3xl text-white lg:hidden">
                {menuOpen ? <CloseRoundedIcon fontSize="inherit" /> : <MenuRoundedIcon fontSize="inherit" />}
            </button>

            <div className={`${menuOpen ? "flex" : "hidden"} absolute left-0 top-full z-10 w-full flex-col items-center gap-2 bg-primary pb-4 shadow-lg lg:static lg:z-auto lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-10 lg:pb-0 lg:shadow-none`}>
                <NavLink to="/" end className={navLinkClass}><p className="w-full p-4 text-center lg:p-0 lg:text-left">Accueil</p></NavLink>
                <NavLink to="/Programmes" className={navLinkClass}><p className="w-full p-4 text-center lg:p-0 lg:text-left">Programmes</p></NavLink>
                <NavLink to="/Annonces" className={navLinkClass}><p className="w-full p-4 text-center lg:p-0 lg:text-left">Annonces</p></NavLink>
                <a href="#contact-us" className="grid w-fit p-4 text-center font-poppins text-lg text-white lg:p-0 lg:text-left"><p>Contactez nous</p></a>

                {!isAuthenticated && (
                    <a href="/connexion" className="mx-auto my-2 grid h-[45px] w-[150px] place-items-center rounded-full bg-white/20 text-center font-poppins text-white transition hover:bg-white hover:text-primary lg:mx-0 lg:my-0 lg:ml-4">
                        <p>Se connecter</p>
                    </a>
                )}

                {isAuthenticated && (
                    <div className="mx-auto my-2 flex items-center gap-6 lg:mx-0 lg:my-0 lg:ml-4">
                        <NavLink to={roleHomePath(user)} className="grid h-[45px] w-[150px] place-items-center rounded-full bg-white/90 text-center font-poppins text-primary transition hover:bg-white">
                            <p>Mon Compte</p>
                        </NavLink>
                        <button onClick={handleLogout} className="border-0 bg-primary text-white" aria-label="déconnexion"><Logout /></button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar1;
