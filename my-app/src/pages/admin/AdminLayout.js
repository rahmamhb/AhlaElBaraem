import { useState } from "react";
import NavBar1 from "../../NavBar1";
import wave from "../../assets/wave.png";
import TeamManagement from "./TeamManagement";
import ChildrenManagement from "./ChildrenManagement";
import SiteManagement from "./SiteManagement";

const AdminLayout = () => {
    const [tab, setTab] = useState("equipe");

    const tabClass = (key) => `border-r-2 border-gray-mid px-6 font-poppins text-lg last:border-r-0 ${tab === key ? "font-semibold text-primary" : "text-gray-mid"}`;

    return (
        <div className="grid w-full">
            <div className="relative">
                <NavBar1></NavBar1>
                <img src={wave} alt="wave" className="w-full"/>
            </div>

            <div className="mx-auto -mt-8 grid w-fit grid-flow-col rounded-full bg-white px-5 py-4 shadow-md">
                <button className={tabClass("equipe")} onClick={() => setTab("equipe")}>Gestion de l'équipe</button>
                <button className={tabClass("enfants")} onClick={() => setTab("enfants")}>Gestion des enfants</button>
                <button className={tabClass("site")} onClick={() => setTab("site")}>Gestion du site</button>
            </div>

            <div className="bg-white py-8">
                {tab === "equipe" && <TeamManagement></TeamManagement>}
                {tab === "enfants" && <ChildrenManagement></ChildrenManagement>}
                {tab === "site" && <SiteManagement></SiteManagement>}
            </div>
        </div>
    );
}

export default AdminLayout;
