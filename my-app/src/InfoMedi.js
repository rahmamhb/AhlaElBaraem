import { useEffect, useState } from "react";
import EditRounded from '@mui/icons-material/EditRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { useAuth } from "./context/AuthContext";
import * as childrenApi from "./mock/api/children";

const Pill = ({ children, onRemove }) => (
    <span className="mr-3 flex items-center gap-1 rounded-full bg-gray-200 px-4 py-2 text-lg text-gray-dark">
        {children}
        {onRemove && (
            <button type="button" onClick={onRemove} aria-label="supprimer" className="text-gray-mid transition hover:text-primary">
                <CloseRounded fontSize="small" />
            </button>
        )}
    </span>
);

const EditableList = ({ items, onChange }) => {
    const [draft, setDraft] = useState("");
    const add = () => {
        const value = draft.trim();
        if (!value) return;
        onChange([...items, value]);
        setDraft("");
    };
    return (
        <div className="grid gap-2">
            <p className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                    <Pill key={`${item}-${i}`} onRemove={() => onChange(items.filter((_, idx) => idx !== i))}>{item}</Pill>
                ))}
                {items.length === 0 && <span className="text-sm text-gray-mid">aucun élément</span>}
            </p>
            <div className="flex gap-2">
                <input
                    className="flex-1 rounded-md border border-gray-light px-3 py-2"
                    placeholder="ajouter..."
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(); } }}
                />
                <button type="button" onClick={add} className="w-fit rounded-full bg-accent-yellow-dark px-4 py-2 text-white transition hover:bg-accent-yellow-dark/80">
                    ajouter
                </button>
            </div>
        </div>
    );
};

const InfoMedi = () => {
    const { activeChildId } = useAuth();
    const [child, setChild] = useState(null);
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState(null);
    const [saving, setSaving] = useState(false);

    const refresh = () => activeChildId && childrenApi.getChildById(activeChildId).then(setChild);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { refresh(); setEditing(false); }, [activeChildId]);

    const startEdit = () => {
        setForm({
            allergies: [...(child.allergies || [])],
            medicaments: [...(child.medicaments || [])],
            conditionsMedicales: [...(child.conditionsMedicales || [])],
            vaccins: [...(child.vaccins || [])],
            antecedents: child.antecedents || "",
            instructionsSpeciales: child.instructionsSpeciales || "",
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

    if (editing) {
        return (
            <form onSubmit={handleSave} className="grid gap-8 text-left">
                <div>
                    <h1 className="mb-2 text-sm font-semibold uppercase text-primary">allergies</h1>
                    <EditableList items={form.allergies} onChange={(v) => setForm({ ...form, allergies: v })} />
                </div>

                <div>
                    <h1 className="mb-2 text-sm font-semibold uppercase text-primary">médicament</h1>
                    <EditableList items={form.medicaments} onChange={(v) => setForm({ ...form, medicaments: v })} />
                </div>

                <div>
                    <h1 className="mb-2 text-sm font-semibold uppercase text-primary">conditions médicales</h1>
                    <EditableList items={form.conditionsMedicales} onChange={(v) => setForm({ ...form, conditionsMedicales: v })} />
                </div>

                <div>
                    <h1 className="mb-2 text-sm font-semibold uppercase text-primary">vaccins</h1>
                    <EditableList items={form.vaccins} onChange={(v) => setForm({ ...form, vaccins: v })} />
                </div>

                <label className="grid gap-2">
                    <span className="text-sm font-semibold uppercase text-primary">antécédents médicaux</span>
                    <textarea className="min-h-[80px] rounded-md border border-gray-light p-3 text-lg text-gray-dark" value={form.antecedents} onChange={(e) => setForm({ ...form, antecedents: e.target.value })} />
                </label>

                <label className="grid gap-2">
                    <span className="text-sm font-semibold uppercase text-primary">instructions spéciales</span>
                    <textarea className="min-h-[80px] rounded-md border border-gray-light p-3 text-lg text-gray-dark" value={form.instructionsSpeciales} onChange={(e) => setForm({ ...form, instructionsSpeciales: e.target.value })} />
                </label>

                <div className="flex gap-3">
                    <button type="submit" disabled={saving} className="w-fit rounded-full bg-accent-yellow-dark px-6 py-2 font-bold text-white transition hover:bg-accent-yellow-dark/80 disabled:opacity-60">
                        {saving ? "enregistrement..." : "enregistrer"}
                    </button>
                    <button type="button" onClick={() => setEditing(false)} className="w-fit rounded-full border border-gray-light px-6 py-2 text-gray-dark transition hover:bg-gray-100">
                        annuler
                    </button>
                </div>
            </form>
        );
    }

    return (
        <div className="grid gap-8 text-left">
            <button onClick={startEdit} className="flex w-fit items-center gap-2 text-sm text-primary hover:underline">
                <EditRounded fontSize="small" /> modifier les informations médicales
            </button>

            <div>
                <h1 className="mb-2 text-sm font-semibold uppercase text-primary">allergies</h1>
                <p className="flex flex-wrap gap-2">{(child.allergies || []).map((a) => <Pill key={a}>{a}</Pill>)}</p>
            </div>

            <div>
                <h1 className="mb-2 text-sm font-semibold uppercase text-primary">médicament</h1>
                <p className="flex flex-wrap gap-2">{(child.medicaments || []).map((m) => <Pill key={m}>{m}</Pill>)}</p>
            </div>

            <div>
                <h1 className="mb-2 text-sm font-semibold uppercase text-primary">conditions médicales</h1>
                <span className="text-lg text-gray-dark">Toute affection médicale chronique de l'enfant, comme l'asthme, le diabète ou l'épilepsie.</span>
                <p className="mt-2 flex flex-wrap gap-2">{(child.conditionsMedicales || []).map((c) => <Pill key={c}>{c}</Pill>)}</p>
            </div>

            <div>
                <h1 className="mb-2 text-sm font-semibold uppercase text-primary">vaccins</h1>
                <p className="flex flex-wrap gap-2">{(child.vaccins || []).map((v) => <Pill key={v}>{v}</Pill>)}</p>
            </div>

            <div>
                <h1 className="mb-2 text-sm font-semibold uppercase text-primary">antécédents médicaux</h1>
                <span className="text-lg text-gray-dark">{child.antecedents || "Aucun antécédent particulier"}</span>
            </div>

            <div>
                <h1 className="mb-2 text-sm font-semibold uppercase text-primary">instructions spéciales</h1>
                <span className="text-lg text-gray-dark">{child.instructionsSpeciales || "Aucune instruction spéciale"}</span>
            </div>
        </div>
    );
}

export default InfoMedi;
