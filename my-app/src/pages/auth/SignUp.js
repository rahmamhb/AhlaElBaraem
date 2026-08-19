import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BRANDING } from "../../config/branding";
import { useAuth } from "../../context/AuthContext";
import * as authApi from "../../mock/api/auth";
import reglInter from "../../assets/Reglementinter.pdf";
import registrationBg from "../../assets/registrationBg.png";

const ALLERGY_OPTIONS = ["Aucune", "Lait", "Œufs", "Fruits à coque", "Gluten"];

const Steps = ["Enfant", "Habitudes", "Documents"];

const SignUp = () => {
    const navigate = useNavigate();
    const { refresh } = useAuth();
    const [step, setStep] = useState(1);

    const [childPrenom, setChildPrenom] = useState("");
    const [childNom, setChildNom] = useState("");
    const [childDateNaissance, setChildDateNaissance] = useState("");
    const [childSexe, setChildSexe] = useState("masculin");
    const [parentName, setParentName] = useState("");
    const [parentEmail, setParentEmail] = useState("");

    const [allergies, setAllergies] = useState([]);
    const [alimentsPreferes, setAlimentsPreferes] = useState("");
    const [seNourritSeul, setSeNourritSeul] = useState(true);
    const [independant, setIndependant] = useState(true);

    const [accepted, setAccepted] = useState(false);
    const [seenProgramme, setSeenProgramme] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggleAllergy = (a) => {
        setAllergies((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);
    };

    const handleSubmit = async () => {
        await authApi.registerFamily({
            childPrenom, childNom, childDateNaissance, childSexe,
            parentName, parentEmail,
            allergies, alimentsPreferes: alimentsPreferes ? [alimentsPreferes] : [],
            seNourritSeul, independant,
        });
        await refresh();
        setSubmitted(true);
        setTimeout(() => navigate("/inscription/en-attente"), 1200);
    };

    return (
        <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
            <div className="hidden bg-cover bg-center md:block" style={{ backgroundImage: `url(${registrationBg})` }}></div>
            <div className="grid content-center justify-items-center gap-8 px-6 py-16">
                <div className="grid w-full max-w-md gap-8">
                    <img src={BRANDING.logo} alt={BRANDING.institutionName} className="h-16 w-16" />
                    <h1 className="font-display text-3xl text-gray-dark">créer mon compte</h1>

                    <div className="flex items-center gap-3">
                        {Steps.map((label, i) => (
                            <div key={label} className="flex items-center gap-3">
                                <span className={`grid h-8 w-8 place-items-center rounded-full font-bold text-white ${step >= i + 1 ? "bg-accent-orange" : "bg-gray-light"}`}>{i + 1}</span>
                                {i < Steps.length - 1 && <span className="h-0.5 w-8 bg-gray-light"></span>}
                            </div>
                        ))}
                    </div>

                    {submitted ? (
                        <p className="rounded-xl bg-gray-100 p-6 text-center font-poppins text-gray-dark">Votre connexion est faite avec succès. Redirection...</p>
                    ) : (
                        <>
                            {step === 1 && (
                                <div className="grid gap-4">
                                    <input placeholder="Prénom de mon enfant" className="rounded-lg border border-gray-light px-4 py-3" value={childPrenom} onChange={(e) => setChildPrenom(e.target.value)} />
                                    <input placeholder="Nom de mon enfant" className="rounded-lg border border-gray-light px-4 py-3" value={childNom} onChange={(e) => setChildNom(e.target.value)} />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="date" className="rounded-lg border border-gray-light px-4 py-3" value={childDateNaissance} onChange={(e) => setChildDateNaissance(e.target.value)} />
                                        <select className="rounded-lg border border-gray-light px-4 py-3" value={childSexe} onChange={(e) => setChildSexe(e.target.value)}>
                                            <option value="masculin">masculin</option>
                                            <option value="féminin">féminin</option>
                                        </select>
                                    </div>
                                    <input placeholder="Votre nom (parent)" className="rounded-lg border border-gray-light px-4 py-3" value={parentName} onChange={(e) => setParentName(e.target.value)} />
                                    <input type="email" placeholder="Votre email" className="rounded-lg border border-gray-light px-4 py-3" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} />
                                    <button disabled={!childPrenom || !childNom || !parentName || !parentEmail} className="rounded-full bg-accent-orange px-6 py-3 font-bold text-white disabled:opacity-40" onClick={() => setStep(2)}>Suivant</button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="grid gap-4">
                                    <p className="font-poppins text-gray-dark">Allergies de mon enfant</p>
                                    <div className="flex flex-wrap gap-2">
                                        {ALLERGY_OPTIONS.map((a) => (
                                            <button type="button" key={a} onClick={() => toggleAllergy(a)} className={`rounded-full border px-3 py-1.5 text-sm ${allergies.includes(a) ? "border-primary bg-primary text-white" : "border-gray-light text-gray-dark"}`}>{a}</button>
                                        ))}
                                    </div>
                                    <input placeholder="Aliments préférés de mon enfant" className="rounded-lg border border-gray-light px-4 py-3" value={alimentsPreferes} onChange={(e) => setAlimentsPreferes(e.target.value)} />
                                    <div>
                                        <p className="font-poppins text-gray-dark">se nourrit-il seul ?</p>
                                        <div className="flex gap-4">
                                            <label className="flex items-center gap-2"><input type="radio" checked={seNourritSeul} onChange={() => setSeNourritSeul(true)} /> oui</label>
                                            <label className="flex items-center gap-2"><input type="radio" checked={!seNourritSeul} onChange={() => setSeNourritSeul(false)} /> Non</label>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-gray-dark">Mon enfant est-il indépendant</p>
                                        <div className="flex gap-4">
                                            <label className="flex items-center gap-2"><input type="radio" checked={independant} onChange={() => setIndependant(true)} /> oui</label>
                                            <label className="flex items-center gap-2"><input type="radio" checked={!independant} onChange={() => setIndependant(false)} /> Non</label>
                                        </div>
                                    </div>
                                    <button className="rounded-full bg-accent-orange px-6 py-3 font-bold text-white" onClick={() => setStep(3)}>Suivant</button>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="grid gap-4">
                                    <p className="font-poppins text-gray-dark">Dossier administratif à fournir</p>
                                    <ul className="ml-4 list-disc font-poppins text-sm text-gray-dark">
                                        <li>un extrait de naissance</li>
                                        <li>Photocopie de carnet de vaccination</li>
                                        <li>03 photos</li>
                                    </ul>
                                    <label className="flex items-center gap-2 font-poppins text-sm text-gray-dark">
                                        <input type="checkbox" checked={seenProgramme} onChange={(e) => setSeenProgramme(e.target.checked)} /> j'ai vu le programme de l'établissement
                                    </label>
                                    <label className="flex items-center gap-2 font-poppins text-sm text-gray-dark">
                                        <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} /> j'ai lu et j'accepte <a href={reglInter} target="_blank" rel="noopener noreferrer" className="text-primary underline">le règlement intérieur</a>
                                    </label>
                                    <button disabled={!accepted || !seenProgramme} className="rounded-full bg-primary px-6 py-3 font-bold text-white disabled:opacity-40" onClick={handleSubmit}>se connecter</button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SignUp;
