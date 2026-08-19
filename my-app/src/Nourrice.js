import { useEffect, useState } from "react";
import DashboardShell from "./DashboardShell";
import ChildList from "./ChildList";
import Comment from "./Comment";
import Matiere from "./Matiere";
import * as childrenApi from "./mock/api/children";

const TABS = [
    { key: "matiere", label: "matieres et activitées" },
    { key: "list", label: "liste des enfants" },
    { key: "comment", label: "Commentaires" },
];

const Nourrice = () => {
    const [tab, setTab] = useState("matiere");
    const [matieres, setMatieres] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        childrenApi.getMatieres().then(setMatieres);
    }, []);

    useEffect(() => {
        if (tab === "comment") childrenApi.getComments().then((all) => setComments(all.filter((c) => c.staffRole === "nourrice")));
    }, [tab]);

    return (
        <DashboardShell tabs={TABS} active={tab} onChange={setTab}>
            {tab === "list" && <ChildList matiereData={matieres}></ChildList>}
            {tab === "comment" && <Comment data={comments}></Comment>}
            {tab === "matiere" && <Matiere data={matieres} onChange={() => childrenApi.getMatieres().then(setMatieres)}></Matiere>}
        </DashboardShell>
    );
}

export default Nourrice;
