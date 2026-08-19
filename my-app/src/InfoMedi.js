import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";
import * as childrenApi from "./mock/api/children";

const Pill = ({ children }) => (
    <span className="mr-3 rounded-full bg-gray-200 px-4 py-2 text-lg text-gray-dark">{children}</span>
);

const InfoMedi = () => {
    const { user } = useAuth();
    const [child, setChild] = useState(null);

    useEffect(() => {
        if (user?.childId) childrenApi.getChildById(user.childId).then(setChild);
    }, [user]);

    if (!child) return <p className="text-center text-gray-mid">Chargement...</p>;

    return (
        <div className="grid gap-8 text-left">
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
