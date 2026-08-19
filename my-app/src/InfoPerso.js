import { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";
import * as childrenApi from "./mock/api/children";

const InfoPerso = () => {
    const { user } = useAuth();
    const [child, setChild] = useState(null);

    useEffect(() => {
        if (user?.childId) childrenApi.getChildById(user.childId).then(setChild);
    }, [user]);

    if (!child) return <p className="text-center text-gray-mid">Chargement...</p>;

    return (
        <div className="grid gap-10 font-poppins text-gray-dark">
            <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start md:pl-[10%]">
                <img src={child.photo} alt="" className="h-[200px] w-[200px] rounded-full object-cover" />
                <div className="grid gap-3 text-left">
                    <p><span className="font-semibold">nom:</span> <span>{child.nom}</span></p>
                    <p><span className="font-semibold">prénom:</span> <span>{child.prenom}</span></p>
                    <p><span className="font-semibold">date de naissance:</span> <span>{child.dateNaissance}</span></p>
                    <p><span className="font-semibold">sexe:</span> <span>{child.sexe}</span></p>
                </div>
            </div>

            <div className="grid gap-4 text-left md:pl-[10%]">
                <div className="flex flex-wrap gap-16">
                    <div className="grid gap-3">
                        <p><span className="font-semibold">père:</span> <span>{child.pere}</span></p>
                        <p><span className="font-semibold">mère:</span> <span>{child.mere}</span></p>
                    </div>
                    <div className="grid gap-3">
                        <p><span className="font-semibold">profession:</span> <span>{child.jobPere}</span></p>
                        <p><span className="font-semibold">profession:</span> <span>{child.jobMere}</span></p>
                    </div>
                </div>
                <p><span className="font-semibold">N° de téléphone:</span> <span>{child.telephone}</span></p>
                <p><span className="font-semibold">email:</span> <span>{child.email}</span></p>
                <p><span className="font-semibold">adresse:</span> <span>{child.adresse}</span></p>
                <p><span className="font-semibold">frères:</span> <span>{child.freres}</span></p>
            </div>
        </div>
    );
}

export default InfoPerso;
