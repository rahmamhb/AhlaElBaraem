import { useState } from "react";
import ChildList from "../../ChildList";
import RegistrationRequests from "./RegistrationRequests";
import PillTabs from "../../PillTabs";
import { DASHBOARD_CONTAINER } from "../../layout";

const TABS = [
    { key: "liste", label: "Liste des enfants" },
    { key: "demandes", label: "Demandes d'inscription" },
];

const ChildrenManagement = () => {
    const [tab, setTab] = useState("liste");

    return (
        <div className={`${DASHBOARD_CONTAINER} grid gap-6`}>
            <PillTabs tabs={TABS} active={tab} onChange={setTab} variant="plain" />
            {tab === "liste" && <ChildList mode="admin"></ChildList>}
            {tab === "demandes" && <RegistrationRequests></RegistrationRequests>}
        </div>
    );
}

export default ChildrenManagement;
