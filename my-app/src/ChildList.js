import Moment from "react-moment";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import ChevronLeft from '@mui/icons-material/ChevronLeftRounded';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import * as childrenApi from "./mock/api/children";
import { useAuth } from "./context/AuthContext";

const EMOJIS = ["😒", "🙁", "😊", "🥰", "👏"];
const LEVELS = [
    { value: "red", className: "border-status-red" },
    { value: "orange", className: "border-status-orange" },
    { value: "yellow", className: "border-status-yellow" },
    { value: "green", className: "border-status-green" },
];

// Replaces the old ListEnfants.js / ListEnfantStaff.js duplicate pair.
// `matiereData` presence switches on the extended matière/activité/rating form
// (used by Nourrice); `mode="admin"` swaps the overlay for an editable child
// profile + delete action (used by the admin Children Management screen).
const ChildList = ({ matiereData, mode = "staff" }) => {
    const { user } = useAuth();
    const [data, setData] = useState([]);

    const refresh = () => childrenApi.getChildren().then(setData);
    useEffect(() => { refresh(); }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [childrenPerPage] = useState(10);
    const indexOfLastChild = currentPage * childrenPerPage;
    const indexOfFirstChild = indexOfLastChild - childrenPerPage;
    const currentChild = data.slice(indexOfFirstChild, indexOfLastChild);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [currentOverlayIndex, setCurrentOverlayIndex] = useState(null);

    const [selectedMatiere, setSelectedMatiere] = useState(matiereData ? matiereData[0] : null);
    const [emojiValue, setEmojiValue] = useState("");
    const [choosenAct, setChoosenAct] = useState("");
    const [level, setLevel] = useState("");
    const [comment, setComment] = useState("");
    const [editChild, setEditChild] = useState(null);

    function handleMatiereChange(event) {
        const found = matiereData.find((m) => m.matiereName === event.target.value);
        setSelectedMatiere(found);
    }

    function openOverlay(index, child) {
        setCurrentOverlayIndex(index);
        setComment("");
        setEmojiValue("");
        setChoosenAct("");
        setLevel("");
        setEditChild(mode === "admin" ? { ...child } : null);
    }

    const handleSubmit = async (e, child) => {
        e.preventDefault();
        if (mode === "admin") {
            await childrenApi.updateChild(child.id, editChild);
            await refresh();
            setCurrentOverlayIndex(null);
            return;
        }
        const contentParts = [];
        if (emojiValue) contentParts.push(`Comportement du jour : ${emojiValue}`);
        if (selectedMatiere) contentParts.push(`Matière : ${selectedMatiere.matiereName}${choosenAct ? ` — ${choosenAct}` : ""}`);
        if (level) contentParts.push(`Niveau : ${level}`);
        if (comment) contentParts.push(comment);
        await childrenApi.addComment({
            childId: child.id,
            childName: child.childName,
            staffId: user?.id,
            staffName: user?.name,
            staffRole: user?.staffRole,
            content: contentParts.join(" — ") || "Commentaire envoyé.",
        });
        setCurrentOverlayIndex(null);
    };

    const handleDelete = async (child) => {
        await childrenApi.deleteChild(child.id);
        await refresh();
    };

    return (
        <div className="grid w-full grid-rows-[auto_auto] justify-items-center">
            <div className="grid w-full grid-flow-row gap-4 px-4 pb-16 pt-5 md:px-8">
                {currentChild.map((item, index) => (
                    <div key={item.id}>
                        <div
                            className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/70 transition-all duration-300 ${
                                currentOverlayIndex === index ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
                            }`}
                        >
                            <div className="max-h-[85vh] w-[92vw] max-w-xl overflow-y-auto rounded-3xl bg-white">
                                <div className="grid grid-rows-[auto_auto] items-start gap-2 rounded-t-3xl bg-accent-yellow px-6 py-3 md:px-9">
                                    <button className="w-fit text-gray-dark" onClick={() => setCurrentOverlayIndex(null)}>
                                        <ChevronLeft style={{ height: 40, width: 40 }} />
                                    </button>
                                    <div className="grid grid-cols-[auto_auto] items-center gap-5 pl-2 md:pl-10">
                                        <img src={item.photo} alt={item.childName} className="h-24 w-24 rounded-full object-cover" />
                                        <div>
                                            <p className="font-poppins text-lg text-gray-dark">{item.childName} , {item.age} ans</p>
                                            <p className="font-poppins text-lg text-gray-dark">{item.email}</p>
                                        </div>
                                    </div>
                                </div>

                                {mode === "admin" ? (
                                    <form onSubmit={(e) => handleSubmit(e, item)} className="grid justify-items-start gap-4 px-6 py-4 md:px-9">
                                        <label className="grid w-full gap-1">
                                            <span className="text-gray-dark underline">Prénom</span>
                                            <input className="w-full rounded-md border border-gray-light px-3 py-2" value={editChild?.prenom || ""} onChange={(e) => setEditChild({ ...editChild, prenom: e.target.value, childName: `${e.target.value} ${editChild?.nom || ""}` })} />
                                        </label>
                                        <label className="grid w-full gap-1">
                                            <span className="text-gray-dark underline">Nom</span>
                                            <input className="w-full rounded-md border border-gray-light px-3 py-2" value={editChild?.nom || ""} onChange={(e) => setEditChild({ ...editChild, nom: e.target.value, childName: `${editChild?.prenom || ""} ${e.target.value}` })} />
                                        </label>
                                        <label className="grid w-full gap-1">
                                            <span className="text-gray-dark underline">Âge</span>
                                            <input type="number" min="0" className="w-full rounded-md border border-gray-light px-3 py-2" value={editChild?.age || ""} onChange={(e) => setEditChild({ ...editChild, age: Number(e.target.value) })} />
                                        </label>
                                        <label className="grid w-full gap-1">
                                            <span className="text-gray-dark underline">Téléphone du parent</span>
                                            <input className="w-full rounded-md border border-gray-light px-3 py-2" value={editChild?.telephone || ""} onChange={(e) => setEditChild({ ...editChild, telephone: e.target.value })} />
                                        </label>
                                        <label className="grid w-full gap-1">
                                            <span className="text-gray-dark underline">Email du parent</span>
                                            <input className="w-full rounded-md border border-gray-light px-3 py-2" value={editChild?.email || ""} onChange={(e) => setEditChild({ ...editChild, email: e.target.value })} />
                                        </label>
                                        <button className="rounded-full bg-accent-yellow-dark px-6 py-2 font-bold text-white hover:bg-accent-yellow-dark/80">enregistrer</button>
                                    </form>
                                ) : (
                                    <form onSubmit={(e) => handleSubmit(e, item)} className="grid justify-items-start gap-4 px-6 py-4 md:px-9">
                                        <div>
                                            <h3 className="text-gray-dark underline">Comportement d'aujourd'hui</h3>
                                            <div className="flex flex-wrap items-center justify-center">
                                                {EMOJIS.map((emoji, i) => (
                                                    <div className="flex h-20 w-20 items-center justify-center" key={i}>
                                                        <label className="cursor-pointer">
                                                            <input className="hidden peer" type="radio" name="feedback" value={emoji} onChange={(e) => setEmojiValue(e.target.value)} />
                                                            <span className="text-3xl grayscale transition peer-checked:grayscale-0 peer-checked:text-5xl">{emoji}</span>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {matiereData && (
                                            <div className="grid w-full gap-10">
                                                <div className="grid gap-2">
                                                    <h3 className="text-gray-dark underline">Matières</h3>
                                                    <select className="rounded-md border-0 px-4 py-3 font-poppins text-gray-dark shadow" value={selectedMatiere?.matiereName} onChange={handleMatiereChange}>
                                                        {matiereData.map((m) => (
                                                            <option key={m.matiereName} value={m.matiereName}>{m.matiereName}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="grid gap-2">
                                                    <h3 className="text-gray-dark underline">Activités</h3>
                                                    <select className="rounded-md border-0 px-4 py-3 font-poppins text-gray-dark shadow" onChange={(e) => setChoosenAct(e.target.value)}>
                                                        {(selectedMatiere?.activities || []).map((a) => (
                                                            <option key={a} value={a}>{a}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="flex items-center justify-center gap-3">
                                                    {LEVELS.map((l) => (
                                                        <label className="cursor-pointer" key={l.value}>
                                                            <input className="peer hidden" type="radio" name="review" value={l.value} onChange={(e) => setLevel(e.target.value)} />
                                                            <span className={`block h-10 w-10 rounded-full border-2 ${l.className} peer-checked:bg-current`} style={{ color: l.value }}></span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="w-full">
                                            <h3 className="text-gray-dark underline">Commentaire</h3>
                                            <textarea className="min-h-[120px] w-full rounded-md border border-gray-light p-3 font-poppins" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                        </div>
                                        <button className="rounded-full bg-accent-yellow-dark px-6 py-2 font-bold text-white hover:bg-accent-yellow-dark/80">envoyer</button>
                                    </form>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b-2 border-primary py-4 font-poppins font-bold text-gray-dark">
                            <span>{index + 1}</span>
                            <span>{item.childName}</span>
                            <span className="max-w-[55vw] truncate sm:max-w-[220px]">{item.email}</span>
                            <span><Moment format='lll'>{new Date()}</Moment></span>
                            <span className="grow"></span>
                            <button className="rounded-full bg-accent-yellow-dark px-5 py-1 text-sm font-bold text-white hover:bg-accent-yellow-dark/80" onClick={() => openOverlay(index, item)}>
                                {mode === "admin" ? "modifier" : "éditer"}
                            </button>
                            {mode === "admin" && (
                                <button className="text-primary hover:text-primary/70" onClick={() => handleDelete(item)} aria-label="supprimer">
                                    <DeleteOutline />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Pagination childPerPage={childrenPerPage} TotalChildren={data.length} paginate={paginate}></Pagination>
        </div>
    );
};

export default ChildList;
