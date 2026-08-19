import { useState } from "react";
import DashboardShell from "../../DashboardShell";
import TeamManagement from "./TeamManagement";
import ChildrenManagement from "./ChildrenManagement";
import SiteManagement from "./SiteManagement";

const TABS = [
    { key: "equipe", label: "Gestion de l'équipe" },
    { key: "enfants", label: "Gestion des enfants" },
    { key: "site", label: "Gestion du site" },
];

const AdminLayout = () => {
    const [tab, setTab] = useState("equipe");

    return (
        <DashboardShell tabs={TABS} active={tab} onChange={setTab}>
            {tab === "equipe" && <TeamManagement></TeamManagement>}
            {tab === "enfants" && <ChildrenManagement></ChildrenManagement>}
            {tab === "site" && <SiteManagement></SiteManagement>}
        </DashboardShell>
    );
}

export default AdminLayout;
