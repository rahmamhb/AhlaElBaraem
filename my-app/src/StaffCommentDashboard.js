import { useEffect, useState } from "react";
import DashboardShell from "./DashboardShell";
import Comment from "./Comment";
import ChildList from "./ChildList";
import * as childrenApi from "./mock/api/children";
import { DASHBOARD_CONTAINER } from "./layout";

// Replaces the near-duplicate Orthophonist.js / Psychologue.js pair — same
// shell, only the role differs, so it's parameterized instead of copy-pasted.
const ROLE_LABELS = {
    orthophoniste: "Orthophoniste",
    psychologue: "Psychologue",
};

const TABS = [
    { key: "list", label: "liste des enfants" },
    { key: "comment", label: "Commentaires" },
];

const StaffCommentDashboard = ({ staffRole }) => {
    const [tab, setTab] = useState("list");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        childrenApi.getComments().then((all) => {
            setComments(all.filter((c) => c.staffRole === staffRole));
        });
    }, [staffRole, tab]);

    return (
        <DashboardShell tabs={TABS} active={tab} onChange={setTab}>
            <h1 className={`${DASHBOARD_CONTAINER} mb-4 font-display text-2xl text-gray-dark`}>{ROLE_LABELS[staffRole] || "Staff"}</h1>
            {tab === "list" && <ChildList></ChildList>}
            {tab === "comment" && <Comment data={comments}></Comment>}
        </DashboardShell>
    );
}

export default StaffCommentDashboard;
