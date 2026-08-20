import { useEffect, useState } from "react";
import EditRounded from '@mui/icons-material/EditRounded';
import { useAuth } from "./context/AuthContext";
import * as childrenApi from "./mock/api/children";

const InfoPerso = () => {
    const { user } = useAuth();
    const [child, setChild] = useState(null);
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState(null);
    const [saving, setSaving] = useState(false);

    const refresh = () => user?.childId && childrenApi.getChildById(user.childId).then(setChild);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { refresh(); }, [user]);

    const startEdit = () => {
        setForm({
            pere: child.pere || "",
            mere: child.mere || "",
            jobPere: child.jobPere || "",
            jobMere: child.jobMere || "",
            telephone: child.telephone || "",
            email: child.email || "",
            adresse: child.adresse || "",
            freres: child.freres ?? 0,
        });
        setEditing(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        await childrenApi.updateChild(child.id, form);
        await refresh();
        setSaving(false);
        setEditing(false);
    };

    if (!child) return <p className="text-center text-gray-mid">Chargement...</p>;

    return (
        <div className="grid gap-10 font-poppins text-gray-dark">
            <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
                <img src={child.photo} alt="" className="h-[200px] w-[200px] rounded-full object-cover" />
                <div className="grid gap-3 text-left">
                    <p><span className="font-semibold">nom:</span> <span>{child.nom}</span></p>
                    <p><span className="font-semibold">prénom:</span> <span>{child.prenom}</span></p>
                    <p><span className="font-semibold">date de naissance:</span> <span>{child.dateNaissance}</span></p>
                    <p><span className="font-semibold">sexe:</span> <span>{child.sexe}</span></p>
                </div>
            </div>

            {editing ? (
                <form onSubmit={handleSave} className="grid gap-4 text-left">
                    <div className="flex flex-wrap gap-6">
                        <label className="grid min-w-[200px] flex-1 gap-1">
                            <span className="font-semibold">père</span>
                            <input className="rounded-md border border-gray-light px-3 py-2" value={form.pere} onChange={(e) => setForm({ ...form, pere: e.target.value })} />
                        </label>
                        <label className="grid min-w-[200px] flex-1 gap-1">
                            <span className="font-semibold">profession (père)</span>
                            <input className="rounded-md border border-gray-light px-3 py-2" value={form.jobPere} onChange={(e) => setForm({ ...form, jobPere: e.target.value })} />
                        </label>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <label className="grid min-w-[200px] flex-1 gap-1">
                            <span className="font-semibold">mère</span>
                            <input className="rounded-md border border-gray-light px-3 py-2" value={form.mere} onChange={(e) => setForm({ ...form, mere: e.target.value })} />
                        </label>
                        <label className="grid min-w-[200px] flex-1 gap-1">
                            <span className="font-semibold">profession (mère)</span>
                            <input className="rounded-md border border-gray-light px-3 py-2" value={form.jobMere} onChange={(e) => setForm({ ...form, jobMere: e.target.value })} />
                        </label>
                    </div>
                    <label className="grid gap-1">
                        <span className="font-semibold">N° de téléphone</span>
                        <input className="rounded-md border border-gray-light px-3 py-2" value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
                    </label>
                    <label className="grid gap-1">
                        <span className="font-semibold">email</span>
                        <input type="email" className="rounded-md border border-gray-light px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </label>
                    <label className="grid gap-1">
                        <span className="font-semibold">adresse</span>
                        <input className="rounded-md border border-gray-light px-3 py-2" value={form.adresse} onChange={(e) => setForm({ ...form, adresse: e.target.value })} />
                    </label>
                    <label className="grid w-32 gap-1">
                        <span className="font-semibold">frères</span>
                        <input type="number" min="0" className="rounded-md border border-gray-light px-3 py-2" value={form.freres} onChange={(e) => setForm({ ...form, freres: Number(e.target.value) })} />
                    </label>
                    <div className="flex gap-3 pt-2">
                        <button type="submit" disabled={saving} className="w-fit rounded-full bg-accent-yellow-dark px-6 py-2 font-bold text-white transition hover:bg-accent-yellow-dark/80 disabled:opacity-60">
                            {saving ? "enregistrement..." : "enregistrer"}
                        </button>
                        <button type="button" onClick={() => setEditing(false)} className="w-fit rounded-full border border-gray-light px-6 py-2 text-gray-dark transition hover:bg-gray-100">
                            annuler
                        </button>
                    </div>
                </form>
            ) : (
                <div className="grid gap-4 text-left">
                    <button onClick={startEdit} className="flex w-fit items-center gap-2 text-sm text-primary hover:underline">
                        <EditRounded fontSize="small" /> modifier mes informations
                    </button>
                    <div className="flex flex-wrap gap-16">
                        <div className="grid gap-3">
                            <p><span className="font-semibold">père:</span> <span>{child.pere}</span></p>
                            <p><span className="font-semibold">mère:</span> <span>{child.mere}</span></p>
                        </div>
                        <div className="grid gap-3">
                            <p><span className="font-semibold">profession:</span> <span>{child.jobPere}</span></p>
                            <p><span className="font-semibold">profession:</span> <span>{child.jobMere}</span></p>
                        </div>
                    </div>
                    <p><span className="font-semibold">N° de téléphone:</span> <span>{child.telephone}</span></p>
                    <p><span className="font-semibold">email:</span> <span>{child.email}</span></p>
                    <p><span className="font-semibold">adresse:</span> <span>{child.adresse}</span></p>
                    <p><span className="font-semibold">frères:</span> <span>{child.freres}</span></p>
                </div>
            )}
        </div>
    );
}

export default InfoPerso;
