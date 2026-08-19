import SchoolIcon from '@mui/icons-material/School';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeft from '@mui/icons-material/ChevronLeftRounded';
import { useState } from 'react';
import * as childrenApi from "./mock/api/children";

const COLOR_CHOICES = ["255 181 133", "255 231 148", "255 72 72", "154 219 255", "255 189 167", "255 153 0"];

const Matiere = ({ data, onChange }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleClick = (item) => {
        setSelectedItems((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]);
    };

    const [currentOverlayIndex, setCurrentOverlayIndex] = useState(null);
    const [overlay, setOverlay] = useState(false);

    const [act, setAct] = useState("");
    const [act1, setAct1] = useState("");
    const [act2, setAct2] = useState("");
    const [act3, setAct3] = useState("");
    const [mat, setMat] = useState("");
    const [matColor, setMatColor] = useState(COLOR_CHOICES[0]);

    const handleAddActivity = async (e, matiereId) => {
        e.preventDefault();
        if (!act) return;
        await childrenApi.addActivityToMatiere(matiereId, act);
        setAct("");
        onChange && onChange();
    };

    const handleAddMatiere = async (e) => {
        e.preventDefault();
        if (!mat) return;
        await childrenApi.createMatiere({
            matiereName: mat,
            color: matColor,
            activities: [act1, act2, act3].filter(Boolean),
        });
        setMat(""); setAct1(""); setAct2(""); setAct3("");
        setOverlay(false);
        onChange && onChange();
    };

    return (
        <div className="grid gap-16 px-4 py-8 md:px-6">
            <div className="grid gap-16">
                <p className="font-display text-4xl text-primary md:text-5xl">Les matieres</p>
                <div className="grid justify-items-end gap-5">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:ml-[25%] md:grid-cols-3">
                        {data.map((item, index) => (
                            <div key={item.id || item.matiereName}>
                                <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/70 transition-all duration-300 ${currentOverlayIndex === index ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"}`}>
                                    <div className="grid w-[92vw] max-w-lg gap-8 rounded-3xl bg-white p-8">
                                        <span className="grid grid-cols-[auto_1fr] items-center">
                                            <button className="w-fit text-gray-dark" onClick={() => setCurrentOverlayIndex(null)}><ChevronLeft style={{ height: 35, width: 35 }} /></button>
                                            <h3 className="w-fit text-gray-dark underline">{item.matiereName}</h3>
                                        </span>
                                        <div className="grid gap-6">
                                            {item.activities.map((activity, i) => (
                                                <div className="grid grid-cols-[auto_1fr] items-center gap-6" key={i}>
                                                    <span className="h-4 w-4 rounded-full" style={{ backgroundColor: `rgb(${item.color})` }}></span>
                                                    <span className="w-full rounded-3xl px-5 py-3 font-poppins text-gray-dark shadow">{activity}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <form onSubmit={(e) => handleAddActivity(e, item.id)} className="grid grid-cols-[1fr_auto] items-center gap-3">
                                            <input className="border-0 border-b-2 border-gray-dark bg-white text-gray-dark focus:outline-none" type="text" placeholder='Ajouter une activité' value={act} onChange={(e) => setAct(e.target.value)}></input>
                                            <button className="text-gray-dark"><AddCircleIcon style={{ height: 30, width: 30 }} /></button>
                                        </form>
                                    </div>
                                </div>
                                <button className="grid w-full grid-rows-3 justify-items-center gap-2 rounded-3xl px-8 py-5 font-poppins shadow" style={{ color: `rgb(${item.color})` }} onClick={() => setCurrentOverlayIndex(index)}>
                                    <span className="flex h-20 w-20 items-center justify-center rounded-full" style={{ backgroundColor: `rgb(${item.color} / 20%)` }}>
                                        <SchoolIcon style={{ height: 40, width: 40, color: `rgb(${item.color})` }} />
                                    </span>
                                    <h3 className="text-lg">{item.matiereName}</h3>
                                    <p className="font-poppins text-gray-dark">{`${item.activities.length} activités`}</p>
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="text-accent-orange" onClick={() => setOverlay(true)}><AddCircleIcon style={{ height: 55, width: 55 }} /></button>

                    <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/70 transition-all duration-300 ${overlay ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"}`}>
                        <div className="grid w-[92vw] max-w-lg gap-6 rounded-3xl bg-white p-8">
                            <span className="grid grid-cols-[auto_1fr] items-center">
                                <button className="w-fit text-gray-dark" onClick={() => setOverlay(false)}><ChevronLeft style={{ height: 35, width: 35 }} /></button>
                                <h3 className="w-fit text-lg text-gray-dark underline">Ajouter une matière</h3>
                            </span>
                            <form onSubmit={handleAddMatiere} className="grid gap-5">
                                <input className="border-0 border-b-2 border-gray-dark text-gray-dark focus:outline-none" type="text" placeholder='nom de la matiere' value={mat} onChange={(e) => setMat(e.target.value)}></input>
                                <input className="border-0 border-b-2 border-gray-dark text-gray-dark focus:outline-none" type="text" placeholder='activité 1' value={act1} onChange={(e) => setAct1(e.target.value)}></input>
                                <input className="border-0 border-b-2 border-gray-dark text-gray-dark focus:outline-none" type="text" placeholder='activité 2' value={act2} onChange={(e) => setAct2(e.target.value)}></input>
                                <input className="border-0 border-b-2 border-gray-dark text-gray-dark focus:outline-none" type="text" placeholder='activité 3' value={act3} onChange={(e) => setAct3(e.target.value)}></input>

                                <div className="grid gap-3">
                                    <p className="font-poppins text-sm text-gray-dark">Choisissez une couleur :</p>
                                    <div className="grid grid-cols-6 gap-3">
                                        {COLOR_CHOICES.map((c) => (
                                            <label className="cursor-pointer" key={c}>
                                                <input className="peer hidden" type="radio" name="matColor" value={c} checked={matColor === c} onChange={(e) => setMatColor(e.target.value)} />
                                                <span className="block h-5 w-5 rounded-full ring-0 peer-checked:scale-150 peer-checked:ring-2 peer-checked:ring-gray-dark" style={{ backgroundColor: `rgb(${c})` }}></span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <button className="w-fit rounded-full bg-accent-yellow-dark px-4 py-2 text-white transition hover:bg-accent-yellow-dark/80">Confirmer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-16">
                <p className="font-display text-4xl text-primary md:text-5xl">Matieres d'aujourd'hui</p>
                <div className="grid grid-cols-2 gap-6 md:ml-[25%] md:grid-cols-3">
                    {data.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => handleClick(item.matiereName)}
                            className={`flex h-[70px] cursor-pointer items-center justify-center rounded-2xl transition ${selectedItems.includes(item.matiereName) ? "gap-5 bg-accent-yellow" : "border-2 border-accent-yellow bg-white hover:bg-accent-yellow/30"}`}
                        >
                            <p className={`font-poppins font-bold ${selectedItems.includes(item.matiereName) ? "text-white" : "text-gray-mid"}`}>{item.matiereName}</p>
                            {selectedItems.includes(item.matiereName) && (
                                <button className="h-full border-l-2 border-white px-3 text-white" onClick={(e) => { e.stopPropagation(); handleClick(item.matiereName); }}><CloseIcon /></button>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Matiere;
