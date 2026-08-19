import { BRANDING } from "./config/branding"
import HeroIllustration from "./assets/baraemHeader.png"
import wave from './assets/wave.svg';
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"
import staff from "./assets/staff.jpg"
import childrenPhoto from "./assets/children.jpg"
import mapBg from "./assets/map.png"
import innovationIcon from "./assets/innovation.png"
import educationIcon from "./assets/education.png"
import respectIcon from "./assets/respect.jpg"
import winIcon from "./assets/win.png"
import clockIcon from "./assets/clock.png"
import Mail from '@mui/icons-material/MailOutline';
import Place from '@mui/icons-material/PlaceOutlined';
import Phone from '@mui/icons-material/LocalPhoneOutlined';
import ArrowForward from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from "react-router-dom";
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
import Avis from "./Avis";
import { useState } from "react";

const TEAM = [
    { name: "Sarah Amrani", job: "nourrice", imgSrc: staff },
    { name: "Karim Belaid", job: "orthophoniste", imgSrc: staff },
    { name: "Sofiane Rahmani", job: "psychologue", imgSrc: staff },
];

const VALUES = [
    { label: "innovation", icon: innovationIcon },
    { label: "l'éducation", icon: educationIcon },
    { label: "le respect", icon: respectIcon },
    { label: "la persévérance", icon: winIcon },
    { label: "la patience", icon: clockIcon },
];

// Shared content width for every section on this page, so nothing on the
// page argues with a neighbouring section about how wide "full width" is.
const SECTION = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const Home = () => {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero */}
            <header className="w-full bg-primary">
                <NavBar1></NavBar1>
                <div className={`${SECTION} flex flex-col items-center gap-10 py-12 text-white sm:py-16 md:flex-row md:justify-between md:gap-12 lg:py-24`}>
                    <div className="flex max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left">
                        <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">{BRANDING.institutionName}</h1>
                        <p className="font-poppins text-base sm:text-lg">"{BRANDING.tagline}"</p>
                        <a href="/connexion" className="rounded-full bg-accent-yellow-dark px-8 py-3 font-poppins font-bold transition hover:bg-accent-yellow sm:px-10 sm:py-4">Se connecter</a>
                    </div>
                    <img src={HeroIllustration} alt="illustration" className="w-48 sm:w-64 md:w-72 lg:w-96"/>
                </div>
                <img src={wave} alt="" className="-mt-px block w-full"/>
            </header>

            {/* About */}
            <section className={`${SECTION} flex flex-col items-center gap-10 py-16 md:flex-row md:gap-16 lg:py-24`}>
                <Link
                    to="/Gallery"
                    aria-label="Voir la galerie"
                    className="aspect-square w-56 flex-shrink-0 cursor-pointer rounded-[30%_70%_42%_58%/47%_36%_64%_53%] bg-cover bg-center transition hover:contrast-75 sm:w-72 md:w-80"
                    style={{ backgroundImage: `url(${childrenPhoto})` }}
                ></Link>
                <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                    <h2 className="font-display text-3xl text-primary sm:text-4xl lg:text-6xl">A propos de nous</h2>
                    <p className="max-w-xl font-poppins text-base text-gray-dark sm:text-lg">{BRANDING.aboutBlurb}</p>
                </div>
            </section>

            {/* Team */}
            <section className={`${SECTION} flex flex-col items-center gap-12 py-16 lg:py-24`}>
                <h2 className="font-display text-3xl text-primary sm:text-4xl lg:text-5xl">Notre equipe</h2>
                <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
                    {TEAM.map((item, index) => (
                        <div className="flex flex-col items-center gap-2 text-center" key={index}>
                            <img src={item.imgSrc} alt="" className="mb-2 aspect-square w-40 cursor-pointer rounded-[30%_70%_42%_58%/47%_36%_64%_53%] object-cover transition hover:opacity-80 sm:w-full"></img>
                            <p className="text-xl sm:text-2xl">{item.name}</p>
                            <p className="font-poppins text-base font-normal capitalize text-gray-dark">{item.job}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="w-full bg-white">
                <img src={waveTopWhite} alt="" className="block w-full"/>
                <div className={`${SECTION} flex flex-col items-center gap-12 py-4 lg:py-8`}>
                    <h2 className="font-display text-4xl text-primary sm:text-5xl lg:text-6xl">Nos valeurs</h2>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
                        {VALUES.map((v) => (
                            <div key={v.label} className="flex w-36 cursor-pointer flex-col items-center gap-4 rounded-3xl bg-white px-4 py-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-44">
                                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-yellow/20 sm:h-20 sm:w-20">
                                    <img src={v.icon} alt="" className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"/>
                                </span>
                                <p className="text-center text-base text-gray-dark sm:text-lg lg:text-xl">{v.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <img src={waveBottomWhite} alt="" className="block w-full"/>
            </section>

            <Avis></Avis>

            {/* Contact */}
            <section className="w-full" id="contact-us">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div
                        className="flex flex-col items-center gap-8 bg-no-repeat px-6 py-16 sm:px-10 md:items-start md:justify-center md:bg-contain md:bg-right md:px-12 lg:px-16"
                        style={{ backgroundImage: `url(${mapBg})` }}
                    >
                        <h2 className="text-3xl font-normal text-primary sm:text-4xl lg:text-5xl">Contactez nous</h2>
                        <p className="max-w-sm text-center font-poppins text-gray-dark md:text-left">nous sommes ouverts à toutes suggestions vous allez proposer</p>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-6">
                                <Mail style={{ height: 28, width: 28, color: "#555", flexShrink: 0 }} />
                                <div className="font-poppins text-gray-dark">
                                    <p>{BRANDING.contact.email}</p>
                                    <p>{BRANDING.contact.secondaryEmail}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <Phone style={{ height: 28, width: 28, color: "#555", flexShrink: 0 }} />
                                <p className="font-poppins text-gray-dark">{BRANDING.contact.phone}</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <Place style={{ height: 28, width: 28, color: "#555", flexShrink: 0 }} />
                                <div className="font-poppins text-gray-dark">
                                    <p>{BRANDING.contact.addressLine1}</p>
                                    <p>{BRANDING.contact.addressLine2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 bg-primary px-6 py-16 text-white sm:px-10 md:px-16">
                        <div className="w-full max-w-xs">
                            <label className="font-poppins text-base">Nom</label>
                            <input type="text" className="w-full border-0 border-b-2 border-white/40 bg-primary py-1.5 font-poppins text-lg text-white focus:outline-none" value={nom} onChange={(e) => setNom(e.target.value)}></input>
                        </div>
                        <div className="w-full max-w-xs">
                            <label className="font-poppins text-base">email</label>
                            <input type="email" className="w-full border-0 border-b-2 border-white/40 bg-primary py-1.5 font-poppins text-lg text-white focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="w-full max-w-xs">
                            <label className="font-poppins text-base">message</label>
                            <input type="text" className="w-full border-0 border-b-2 border-white/40 bg-primary py-1.5 font-poppins text-lg text-white focus:outline-none" value={msg} onChange={(e) => setMsg(e.target.value)}></input>
                        </div>
                        <button className="flex items-center gap-6 border-2 border-white px-8 py-3 font-poppins font-bold text-white transition hover:bg-white/90 hover:text-primary">
                            <span>envoyer</span>
                            <ArrowForward></ArrowForward>
                        </button>
                    </form>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default Home;
