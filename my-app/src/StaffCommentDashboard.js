import { useEffect, useState } from "react";
import wave from "./assets/wave.png"
import waveTopWhite from "./assets/wavetopwhite.png"
import waveBottomWhite from "./assets/wavebottomwhite.png"
import NavBar1 from "./NavBar1";
import Comment from "./Comment";
import ChildList from "./ChildList";
import * as childrenApi from "./mock/api/children";

// Replaces the near-duplicate Orthophonist.js / Psychologue.js pair — same
// shell, only the role differs, so it's parameterized instead of copy-pasted.
const ROLE_LABELS = {
    orthophoniste: "Orthophoniste",
    psychologue: "Psychologue",
};

const StaffCommentDashboard = ({ staffRole }) => {
    const [list, setList] = useState(true);
    const [comment, setComment] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        childrenApi.getComments().then((all) => {
            setComments(all.filter((c) => c.staffRole === staffRole));
        });
    }, [staffRole, comment]);

    return (
        <div className="grid w-full">
            <div className="relative">
                <NavBar1 showBtn={true}></NavBar1>
                <div className="pointer-events-none absolute inset-x-0 bottom-0">
                    <img src={wave} alt="wave" className="w-full"/>
                </div>
            </div>
            <div className="mt-6 grid w-fit grid-flow-col gap-5 rounded-full bg-white px-6 py-4 shadow-md md:ml-[25%]">
                <button className={`border-r-2 border-gray-mid px-10 font-poppins text-lg ${list ? "font-semibold text-primary" : "text-gray-mid"}`} onClick={() => { setList(true); setComment(false); }}>liste des enfants</button>
                <button className={`px-10 font-poppins text-lg ${comment ? "font-semibold text-primary" : "text-gray-mid"}`} onClick={() => { setList(false); setComment(true); }}>Commentaires</button>
            </div>

            <div className="relative mt-6 bg-white">
                <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-full">
                    <img src={waveTopWhite} alt="wave-top" className="w-full"/>
                </div>
                <div className="bg-white py-6">
                    <h1 className="mb-4 px-6 font-display text-2xl text-gray-dark md:px-[10%]">{ROLE_LABELS[staffRole] || "Staff"}</h1>
                    {list && <ChildList></ChildList>}
                    {comment && <Comment data={comments}></Comment>}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full">
                    <img src={waveBottomWhite} alt="wave-bottom" className="w-full"/>
                </div>
            </div>
        </div>
    );
}

export default StaffCommentDashboard;
