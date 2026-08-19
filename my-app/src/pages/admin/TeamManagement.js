import { useEffect, useState } from "react";
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Pagination from "../../Pagination";
import * as staffApi from "../../mock/api/staff";

const ROLES = ["nourrice", "orthophoniste", "psychologue"];

const TeamManagement = () => {
    const [staff, setStaff] = useState([]);
    const [search, setSearch] = useState("");
    const [overlay, setOverlay] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [staffRole, setStaffRole] = useState(ROLES[0]);
    const [page, setPage] = useState(1);
    const perPage = 6;

    const refresh = () => staffApi.getStaff().then(setStaff);
    useEffect(() => { refresh(); }, []);

    const filtered = staff.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));
    const current = filtered.slice((page - 1) * perPage, page * perPage);

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!name || !email) return;
        await staffApi.createStaffMember({ name, email, staffRole });
        setName(""); setEmail("");
        setOverlay(false);
        refresh();
    };

    const handleDelete = async (id) => {
        await staffApi.deleteStaffMember(id);
        refresh();
    };

    return (
        <div className="mx-auto grid w-full max-w-4xl gap-6 px-4">
            <div className="flex items-center justify-between gap-4">
                <input placeholder="Recherche" className="w-full max-w-xs rounded-full border border-gray-light px-4 py-2" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => setOverlay(true)} className="rounded-full bg-primary px-5 py-2 font-poppins font-bold text-white">Ajouter</button>
            </div>

            <div className="grid gap-3">
                {current.map((s, i) => (
                    <div key={s.id} className="grid grid-cols-[auto_1fr_1fr_1fr_auto] items-center gap-4 border-b border-gray-light py-3 font-poppins text-gray-dark">
                        <span>{(page - 1) * perPage + i + 1}</span>
                        <span>{s.name}</span>
                        <span className="truncate">{s.email}</span>
                        <span className="capitalize">{s.staffRole}</span>
                        <button onClick={() => handleDelete(s.id)} className="text-primary"><DeleteOutline /></button>
                    </div>
                ))}
            </div>
            <Pagination childPerPage={perPage} TotalChildren={filtered.length} paginate={setPage}></Pagination>

            <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/70 transition-all duration-300 ${overlay ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"}`}>
                <form onSubmit={handleAdd} className="grid w-[92vw] max-w-md gap-4 rounded-3xl bg-white p-8">
                    <h3 className="font-poppins text-lg text-gray-dark underline">Ajouter un membre</h3>
                    <input placeholder="Nom complet" className="rounded-lg border border-gray-light px-4 py-2" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" className="rounded-lg border border-gray-light px-4 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <select className="rounded-lg border border-gray-light px-4 py-2 capitalize" value={staffRole} onChange={(e) => setStaffRole(e.target.value)}>
                        {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <div className="flex gap-3">
                        <button type="button" onClick={() => setOverlay(false)} className="rounded-full border border-gray-light px-5 py-2 text-gray-dark">annuler</button>
                        <button className="rounded-full bg-accent-yellow-dark px-5 py-2 font-bold text-white">confirmer</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TeamManagement;
