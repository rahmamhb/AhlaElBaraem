import { useEffect, useState } from "react";
import Moment from "react-moment";
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckRounded from '@mui/icons-material/CheckRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import * as messagesApi from "../../mock/api/messages";
import * as menusApi from "../../mock/api/menus";
import * as announcementsApi from "../../mock/api/announcements";
import * as avisApi from "../../mock/api/avis";
import PillTabs from "../../PillTabs";
import { DASHBOARD_CONTAINER } from "../../layout";

const MessagerieTab = () => {
    const [threads, setThreads] = useState([]);
    useEffect(() => { messagesApi.getAllThreadsForAdmin().then(setThreads); }, []);
    return (
        <div className="grid gap-6">
            {threads.map((m) => (
                <div key={m.id} className="grid gap-2 rounded-2xl bg-white p-5 shadow">
                    <div className="flex items-center justify-between">
                        <span className="font-poppins font-semibold text-gray-dark">{m.senderName} <span className="text-gray-mid">({m.role})</span></span>
                        <span className="text-sm text-gray-mid"><Moment format='lll'>{m.addingDate}</Moment></span>
                    </div>
                    <p className="font-poppins text-gray-dark">{m.messageReceived}</p>
                </div>
            ))}
            {threads.length === 0 && <p className="text-center text-gray-mid">Aucun message.</p>}
        </div>
    );
};

const MenuTab = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => { menusApi.getWeekMenu().then(setMenu); }, []);

    const handleChange = (dayId, field, value) => {
        setMenu((prev) => prev.map((d) => d.id === dayId ? { ...d, [field]: value } : d));
    };

    const handleSave = async (day) => {
        await menusApi.updateMenuDay(day.id, day);
    };

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((day) => (
                <div key={day.id} className="grid gap-2 rounded-2xl bg-white p-5 shadow">
                    <h3 className="font-display text-xl text-primary">{day.day}</h3>
                    <label className="text-sm text-gray-dark">Petit-déjeuner</label>
                    <input className="rounded-md border border-gray-light px-2 py-1" value={day.petitdejeuner} onChange={(e) => handleChange(day.id, "petitdejeuner", e.target.value)} />
                    <label className="text-sm text-gray-dark">Déjeuner</label>
                    <input className="rounded-md border border-gray-light px-2 py-1" value={day.dejeuner} onChange={(e) => handleChange(day.id, "dejeuner", e.target.value)} />
                    <label className="text-sm text-gray-dark">Snack</label>
                    <input className="rounded-md border border-gray-light px-2 py-1" value={day.snack} onChange={(e) => handleChange(day.id, "snack", e.target.value)} />
                    <button onClick={() => handleSave(day)} className="mt-2 w-fit rounded-full bg-accent-yellow-dark px-4 py-1.5 text-sm font-bold text-white">enregistrer</button>
                </div>
            ))}
        </div>
    );
};

const AnnoncesTab = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [image, setImage] = useState(null);

    const refresh = () => announcementsApi.getAnnouncements().then(setAnnouncements);
    useEffect(() => { refresh(); }, []);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!title) return;
        await announcementsApi.createAnnouncement({ title, description, date, time, image });
        setTitle(""); setDescription(""); setDate(""); setTime(""); setImage(null);
        refresh();
    };

    const handleDelete = async (id) => {
        await announcementsApi.deleteAnnouncement(id);
        refresh();
    };

    return (
        <div className="grid gap-8">
            <form onSubmit={handleAdd} className="grid gap-3 rounded-2xl bg-white p-5 shadow">
                <h3 className="font-poppins font-semibold text-gray-dark">Ajouter une annonce</h3>
                <input placeholder="Titre" className="rounded-md border border-gray-light px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" className="rounded-md border border-gray-light px-3 py-2" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <div className="flex gap-3">
                    <input type="date" className="rounded-md border border-gray-light px-3 py-2" value={date} onChange={(e) => setDate(e.target.value)} />
                    <input placeholder="14:00 - 17:00" className="rounded-md border border-gray-light px-3 py-2" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <label className="grid gap-1">
                    <span className="text-sm text-gray-dark">Image (optionnel — l'illustration par défaut sera utilisée sinon)</span>
                    <input type="file" accept="image/*" className="text-sm text-gray-dark" onChange={handleImageChange} />
                </label>
                {image && <img src={image} alt="aperçu" className="h-24 w-24 rounded-lg object-cover" />}
                <button className="flex w-fit items-center gap-2 rounded-full bg-accent-yellow-dark px-5 py-2 font-bold text-white">
                    <AddCircleIcon fontSize="small" /> ajouter
                </button>
            </form>
            <div className="grid gap-3">
                {announcements.map((a) => (
                    <div key={a.id} className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow">
                        <div className="flex items-center gap-4">
                            {a.image && <img src={a.image} alt="" className="h-12 w-12 rounded-lg object-cover" />}
                            <div>
                                <p className="font-poppins font-semibold text-gray-dark">{a.title}</p>
                                <p className="text-sm text-gray-mid">{a.date} · {a.time}</p>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(a.id)} className="text-primary"><DeleteOutline /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AvisTab = () => {
    const [pending, setPending] = useState([]);

    const refresh = () => avisApi.getPendingAvis().then(setPending);
    useEffect(() => { refresh(); }, []);

    const handleApprove = async (id) => {
        await avisApi.approveAvis(id);
        refresh();
    };

    const handleReject = async (id) => {
        await avisApi.rejectAvis(id);
        refresh();
    };

    if (pending.length === 0) {
        return <p className="text-center text-gray-mid">Aucun avis en attente de validation.</p>;
    }

    return (
        <div className="grid gap-4">
            {pending.map((a) => (
                <div key={a.id} className="grid gap-3 rounded-2xl bg-white p-5 shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-poppins font-semibold text-gray-dark">{a.parentName}{a.childName ? ` — parent de ${a.childName}` : ""}</p>
                        <span className="text-sm text-gray-mid"><Moment format='lll'>{a.addingDate}</Moment></span>
                    </div>
                    <p className="font-poppins text-gray-dark">{a.message}</p>
                    <div className="flex gap-3">
                        <button onClick={() => handleApprove(a.id)} className="flex items-center gap-2 rounded-full bg-accent-yellow-dark px-5 py-2 font-bold text-white">
                            <CheckRounded fontSize="small" /> publier
                        </button>
                        <button onClick={() => handleReject(a.id)} className="flex items-center gap-2 rounded-full border border-gray-light px-5 py-2 text-gray-dark">
                            <CloseRounded fontSize="small" /> refuser
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const TABS = [
    { key: "messagerie", label: "Messagerie" },
    { key: "menu", label: "Menu" },
    { key: "annonces", label: "Annonces" },
    { key: "avis", label: "Avis" },
];

const SiteManagement = () => {
    const [tab, setTab] = useState("messagerie");

    return (
        <div className={`${DASHBOARD_CONTAINER} grid gap-6`}>
            <PillTabs tabs={TABS} active={tab} onChange={setTab} variant="plain" />
            {tab === "messagerie" && <MessagerieTab />}
            {tab === "menu" && <MenuTab />}
            {tab === "annonces" && <AnnoncesTab />}
            {tab === "avis" && <AvisTab />}
        </div>
    );
}

export default SiteManagement;
