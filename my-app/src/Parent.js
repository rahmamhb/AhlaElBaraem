import { useState } from 'react'
import DashboardShell from "./DashboardShell";
import Compétence from './Compétence';
import Messagerie from './Messagerie';
import MonEnfant from './MonEnfant';
import CetteSemaine from './CetteSemaine';

const TABS = [
    { key: "cettesemaine", label: "cette semaine" },
    { key: "competence", label: "compétences" },
    { key: "messagerie", label: "messagerie" },
    { key: "monenfant", label: "mon enfant" },
];

const Parent = () => {
    const [tab, setTab] = useState("cettesemaine");

    return (
        <DashboardShell tabs={TABS} active={tab} onChange={setTab} footer>
            {tab === "cettesemaine" && <CetteSemaine></CetteSemaine>}
            {tab === "competence" && <Compétence></Compétence>}
            {tab === "messagerie" && <Messagerie></Messagerie>}
            {tab === "monenfant" && <MonEnfant></MonEnfant>}
        </DashboardShell>
    );
}

export default Parent;
