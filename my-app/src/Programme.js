import Footer from "./Footer";
import NavBar1 from "./NavBar1";
import reglInter from "./assets/reglement.png"
import progGeneral from "./assets/normaux.png"
import progSpe from "./assets/hautistes.png"
import wave from "./assets/wave.svg"

const CARDS = [
    { key: "reg", img: reglInter, alt: "reglinter", bg: "bg-accent-yellow-dark", title: "Reglement Interieur", desc: "Organiser la vie au sein de l'établissement" },
    { key: "gene", img: progGeneral, alt: "progGeneral", bg: "bg-accent-orange", title: "Programme général", desc: "les objectifs éducatifs pour les enfants" },
    { key: "spe", img: progSpe, alt: "progSpecial", bg: "bg-[#FF5959]", title: "Programme autiste", desc: "les activités proposées pour les enfants spéciaux" },
];

const Programme = () => {
    return (
        <div className="grid w-full justify-items-center gap-16">
            <div className="w-full">
                <NavBar1></NavBar1>
                <img src={wave} alt="wave" className="-mt-px block w-full"/>
            </div>
            <div className="grid w-full max-w-6xl justify-items-center gap-16 px-6">
                <p className="font-display text-5xl text-primary lg:text-7xl">Programmes</p>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {CARDS.map((c) => (
                        <div key={c.key} className={`grid w-full max-w-[320px] justify-items-center gap-6 rounded-3xl px-8 py-10 ${c.bg}`}>
                            <img src={c.img} alt={c.alt} className="h-[200px] w-[200px]"></img>
                            <div className="grid justify-items-center gap-3 text-white">
                                <p className="text-2xl">{c.title}</p>
                                <span className="w-full text-center font-poppins text-base leading-relaxed text-white/90">{c.desc}</span>
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
