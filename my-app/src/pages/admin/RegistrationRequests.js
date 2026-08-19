import { useEffect, useState } from "react";
import * as childrenApi from "../../mock/api/children";
import * as authApi from "../../mock/api/auth";

const RegistrationRequests = () => {
    const [pending, setPending] = useState([]);

    const refresh = () => childrenApi.getPendingRegistrations().then(setPending);
    useEffect(() => { refresh(); }, []);

    const handleApprove = async (childId) => {
        await authApi.approveRegistration(childId);
        refresh();
    };

    const handleReject = async (childId) => {
        await authApi.rejectRegistration(childId);
        refresh();
    };

    if (pending.length === 0) {
        return <p className="text-center text-gray-mid">Aucune demande d'inscription en attente.</p>;
    }

    return (
        <div className="grid gap-6">
            {pending.map((child) => (
                <div key={child.id} className="grid gap-2 rounded-2xl bg-white p-6 shadow">
                    <p className="font-poppins text-gray-dark"><span className="font-semibold">Nom complet de l'enfant :</span> {child.childName}</p>
                    <p className="font-poppins text-gray-dark"><span className="font-semibold">Âge :</span> {child.age ?? "—"}</p>
                    <div className="flex gap-3">
                        <button onClick={() => handleApprove(child.id)} className="rounded-full bg-accent-yellow-dark px-5 py-2 font-bold text-white">Confirmer</button>
                        <button onClick={() => handleReject(child.id)} className="rounded-full border border-gray-light px-5 py-2 text-gray-dark">Annuler</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RegistrationRequests;
