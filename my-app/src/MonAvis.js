import { useEffect, useState } from "react";
import Moment from "react-moment";
import SendRounded from '@mui/icons-material/SendRounded';
import { useAuth } from "./context/AuthContext";
import * as avisApi from "./mock/api/avis";
import * as childrenApi from "./mock/api/children";
import { DASHBOARD_CONTAINER } from "./layout";

const MonAvis = () => {
    const { user } = useAuth();
    const [childName, setChildName] = useState("");
    const [avisList, setAvisList] = useState([]);
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const refresh = () => user && avisApi.getAvisForParent(user.id).then(setAvisList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { refresh(); }, [user]);

    useEffect(() => {
        if (user?.childId) childrenApi.getChildById(user.childId).then((c) => setChildName(c?.prenom || c?.childName || ""));
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        await avisApi.submitAvis({ parentId: user.id, parentName: user.name, childName, message: message.trim() });
        setMessage("");
        setSent(true);
        refresh();
    };

    return (
        <div className={`${DASHBOARD_CONTAINER} grid gap-8 py-10`}>
            <div className="grid gap-2">
                <h1 className="font-display text-3xl text-primary">Mon avis</h1>
                <p className="font-poppins text-gray-dark">Partagez votre expérience avec l'équipe. Votre avis sera publié sur le site après validation par l'administration.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3 rounded-3xl bg-white p-6 shadow">
                <textarea
                    className="min-h-[120px] rounded-md border border-gray-light p-3 font-poppins"
                    placeholder="Votre avis..."
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); setSent(false); }}
                ></textarea>
                <button className="flex w-fit items-center gap-2 rounded-full bg-accent-yellow-dark px-6 py-2 font-bold text-white transition hover:bg-accent-yellow-dark/80">
                    <SendRounded fontSize="small" /> envoyer
                </button>
                {sent && <p className="text-sm text-status-green">Merci ! Votre avis a été envoyé et sera publié après validation.</p>}
            </form>

            <div className="grid gap-4">
                <h2 className="font-poppins text-lg font-semibold text-gray-dark">Mes avis envoyés</h2>
                {avisList.length === 0 && <p className="text-gray-mid">Vous n'avez pas encore laissé d'avis.</p>}
                {avisList.map((a) => (
                    <div key={a.id} className="grid gap-2 rounded-2xl bg-white p-5 shadow">
                        <div className="flex items-center justify-between gap-4">
                            <span className="text-sm text-gray-mid"><Moment format='lll'>{a.addingDate}</Moment></span>
                            <span className={`rounded-full px-3 py-1 text-xs font-bold ${a.status === "approved" ? "bg-status-green/15 text-status-green" : "bg-accent-yellow/30 text-accent-yellow-dark"}`}>
                                {a.status === "approved" ? "publié" : "en attente de validation"}
                            </span>
                        </div>
                        <p className="font-poppins text-gray-dark">{a.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MonAvis;
