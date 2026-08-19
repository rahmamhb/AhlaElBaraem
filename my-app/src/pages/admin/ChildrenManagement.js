import { useState } from "react";
import ChildList from "../../ChildList";
import RegistrationRequests from "./RegistrationRequests";

const ChildrenManagement = () => {
    const [tab, setTab] = useState("liste");

    return (
        <div className="mx-auto grid w-full max-w-4xl gap-6 px-4">
            <div className="flex gap-4">
                <button className={`font-poppins text-lg ${tab === "liste" ? "font-semibold text-primary" : "text-gray-mid"}`} onClick={() => setTab("liste")}>Liste des enfants</button>
                <button className={`font-poppins text-lg ${tab === "demandes" ? "font-semibold text-primary" : "text-gray-mid"}`} onClick={() => setTab("demandes")}>Demandes d'inscription</button>
            </div>
            {tab === "liste" && <ChildList mode="admin"></ChildList>}
            {tab === "demandes" && <RegistrationRequests></RegistrationRequests>}
        </div>
    );
}

export default ChildrenManagement;
