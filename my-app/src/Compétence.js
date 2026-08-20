import { useEffect, useState } from "react";
import YellowEllipse from './assets/YellowEllipse.png'
import YellowEllipseA from './assets/YellowEllipseA.png'
import OrangeEllipse from './assets/OrangeEllipse.png'
import OrangeEllipseA from './assets/OrangeEllipseA.png'
import RedEllipse from './assets/RedEllipse.png'
import RedEllipseA from './assets/RedEllipseA.png'
import GreenEllipse from './assets/GreenEllipse.png'
import GreenEllipseA from './assets/GreenEllipseA.png'
import Moment from "react-moment";
import { useAuth } from "./context/AuthContext";
import * as childrenApi from "./mock/api/children";
import { DASHBOARD_CONTAINER } from "./layout";

const Compétence = () => {
    const { user } = useAuth();
    const [competences, setCompetences] = useState([]);

    useEffect(() => {
        if (user?.childId) childrenApi.getCompetences(user.childId).then(setCompetences);
    }, [user]);

    return (
        <div className={`${DASHBOARD_CONTAINER} grid gap-8 py-10`}>
            {competences.map((competence, index) => (
                <div className="grid w-full max-w-3xl gap-3 justify-self-center px-4 py-5 font-poppins text-lg font-semibold" key={competence.id || index}>
                    <span className="text-center text-base font-normal text-gray-mid"><Moment format='dddd L'>{competence.addingDate}</Moment></span>
                    <div className="grid justify-items-end gap-4 font-normal">
                        <span className="w-full max-w-md rounded-3xl bg-primary-light px-5 py-3 text-left text-white">{competence.matiere}</span>

                        <span className="flex w-full items-center rounded-3xl bg-gray-light px-6 py-3 text-gray-dark">
                            <span className="w-full text-left">{competence.activite1}</span>
                            <span className="flex gap-3">
                                <img className="h-5 w-5" src={competence.rating1 === "red" ? RedEllipseA : RedEllipse} alt="" />
                                <img className="h-5 w-5" src={competence.rating1 === "orange" ? OrangeEllipseA : OrangeEllipse} alt="" />
                                <img className="h-5 w-5" src={competence.rating1 === "yellow" ? YellowEllipseA : YellowEllipse} alt="" />
                                <img className="h-5 w-5" src={competence.rating1 === "green" ? GreenEllipseA : GreenEllipse} alt="" />
                            </span>
                        </span>
                        <span className="flex w-full items-center rounded-3xl bg-gray-light px-6 py-3 text-gray-dark">
                            <span className="w-full text-left">{competence.activite2}</span>
                            <span className="flex gap-3">
                                <img className="h-5 w-5" src={competence.rating2 === "red" ? RedEllipseA : RedEllipse} alt="" />
                                <img className="h-5 w-5" src={competence.rating2 === "orange" ? OrangeEllipseA : OrangeEllipse} alt="" />
                                <img className="h-5 w-5" src={competence.rating2 === "yellow" ? YellowEllipseA : YellowEllipse} alt="" />
                                <img className="h-5 w-5" src={competence.rating2 === "green" ? GreenEllipseA : GreenEllipse} alt="" />
                            </span>
                        </span>
                    </div>
                </div>
            ))}
            {competences.length === 0 && <p className="text-center text-gray-mid">Aucune compétence enregistrée pour le moment.</p>}
        </div>
    );
}

export default Compétence;
