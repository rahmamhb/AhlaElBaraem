import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BRANDING } from "../../config/branding";
import { useAuth } from "../../context/AuthContext";
import * as authApi from "../../mock/api/auth";

const FinishRegistration = () => {
    const { user, refresh } = useAuth();
    const navigate = useNavigate();
    const [allergies, setAllergies] = useState("");
    const [medicaments, setMedicaments] = useState("");
    const [vaccins, setVaccins] = useState("");
    const [conditionsMedicales, setConditionsMedicales] = useState("");
    const [antecedents, setAntecedents] = useState("");
    const [instructionsSpeciales, setInstructionsSpeciales] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authApi.completeMedicalForm(user.childId, {
            allergies: allergies ? allergies.split(",").map((s) => s.trim()) : ["Aucune allergie connue"],
            medicaments: medicaments ? medicaments.split(",").map((s) => s.trim()) : ["Aucun"],
            vaccins: vaccins ? vaccins.split(",").map((s) => s.trim()) : [],
            conditionsMedicales: conditionsMedicales ? conditionsMedicales.split(",").map((s) => s.trim()) : ["Aucune"],
            antecedents,
            instructionsSpeciales,
        });
        await refresh();
        navigate("/Parent");
    };

    return (
        <div className="grid min-h-screen w-full justify-items-center px-6 py-16">
            <div className="w-full max-w-2xl">
                <img src={BRANDING.logo} alt={BRANDING.institutionName} className="mb-6 h-14 w-14" />
                <h1 className="mb-8 font-display text-3xl text-gray-dark">Finir mon inscription</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <label className="grid gap-1"><span className="text-gray-dark">Allergies</span><input className="rounded-lg border border-gray-light px-4 py-2" placeholder="respiratoires, lait, ..." value={allergies} onChange={(e) => setAllergies(e.target.value)} /></label>
                    <label className="grid gap-1"><span className="text-gray-dark">Médicaments</span><input className="rounded-lg border border-gray-light px-4 py-2" value={medicaments} onChange={(e) => setMedicaments(e.target.value)} /></label>
                    <label className="grid gap-1"><span className="text-gray-dark">Vaccins</span><input className="rounded-lg border border-gray-light px-4 py-2" placeholder="tétanos, Hépatite B, ..." value={vaccins} onChange={(e) => setVaccins(e.target.value)} /></label>
                    <label className="grid gap-1"><span className="text-gray-dark">Conditions médicales</span><input className="rounded-lg border border-gray-light px-4 py-2" placeholder="l'asthme, l'épilepsie, ..." value={conditionsMedicales} onChange={(e) => setConditionsMedicales(e.target.value)} /></label>
                    <label className="grid gap-1 md:col-span-2"><span className="text-gray-dark">Antécédents médicaux</span><textarea className="rounded-lg border border-gray-light px-4 py-2" value={antecedents} onChange={(e) => setAntecedents(e.target.value)}></textarea></label>
                    <label className="grid gap-1 md:col-span-2"><span className="text-gray-dark">Instructions spéciales</span><textarea className="rounded-lg border border-gray-light px-4 py-2" value={instructionsSpeciales} onChange={(e) => setInstructionsSpeciales(e.target.value)}></textarea></label>
                    <button className="w-fit rounded-full bg-primary px-8 py-3 font-bold text-white md:col-span-2">envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default FinishRegistration;
