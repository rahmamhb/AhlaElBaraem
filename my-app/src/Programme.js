import Footer from "./Footer";
import NavBar1 from "./NavBar1";
import reglInter from "./assets/reglement.png"
import progGeneral from "./assets/normaux.png"
import progSpe from "./assets/hautistes.png"
import wave from "./assets/wave.png"
import pdf1 from "./assets/Reglementinter.pdf"
import pdf2 from "./assets/programmepédagogique.pdf"

const CARDS = [
    { key: "reg", img: reglInter, alt: "reglinter", bg: "bg-accent-yellow-dark", hoverText: "hover:text-accent-yellow-dark", title: "Reglement Interieur", desc: "Organiser la vie au sein de l'établissement", href: pdf1, cta: "Voir plus" },
    { key: "gene", img: progGeneral, alt: "progGeneral", bg: "bg-accent-orange", hoverText: "hover:text-accent-orange", title: "Programme général", desc: "les objectifs éducatifs pour les enfants", href: pdf2, cta: "Voir plus" },
    { key: "spe", img: progSpe, alt: "progSpecial", bg: "bg-[#FF5959]", hoverText: "hover:text-[#FF5959]", title: "Programme autiste", desc: "les activités proposées pour les enfants spéciaux", href: null, cta: "Document dédié bientôt disponible" },
];

const Programme = () => {
    return (
        <div className="grid w-full justify-items-center gap-16">
            <div className="w-full">
                <NavBar1></NavBar1>
                <img src={wave} alt="wave" className="w-full"/>
            </div>
            <div className="grid w-full max-w-6xl justify-items-center gap-16 px-6">
                <p className="font-display text-5xl text-primary lg:text-7xl">Programmes</p>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {CARDS.map((c) => (
                        <div key={c.key} className={`grid w-[320px] justify-items-center gap-8 rounded-3xl py-8 ${c.bg}`}>
                            <img src={c.img} alt={c.alt} className="h-[250px] w-[250px]"></img>
                            <div className="grid justify-items-center gap-5 text-white">
                                <p className="text-3xl">{c.title}</p>
                                <span className="w-[280px] text-center font-poppins text-lg">{c.desc}</span>
                                {c.href ? (
                                    <a href={c.href} target="_blank" rel="noopener noreferrer" className={`grid h-[45px] items-center rounded-full border-2 border-white px-10 text-center font-poppins transition hover:bg-white ${c.hoverText}`}>{c.cta}</a>
                                ) : (
                                    <span className="text-center font-poppins text-sm italic text-white/80">{c.cta}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Programme;
