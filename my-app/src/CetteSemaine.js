import { useEffect, useState } from "react";
import Absent from "./assets/absent.png"
import Present from "./assets/present.png"
import Bud from "./assets/bud.png"
import Menu from './Menu'
import { useAuth } from "./context/AuthContext";
import * as childrenApi from "./mock/api/children";

const EMOJIS = ["😒", "🙁", "😊", "🥰", "👏"];

const BUDS_LIST = [
    { day: "Dimanche", isPresent: true },
    { day: "Lundi", isPresent: false },
    { day: "Mardi", isPresent: true },
    { day: "Mercredi", isPresent: "" },
    { day: "Jeudi", isPresent: "" },
];

const CetteSemaine = () => {
    const { user } = useAuth();
    const [mood, setMood] = useState(null);

    useEffect(() => {
        if (!user?.childId) return;
        childrenApi.getComments(user.childId).then((comments) => {
            const moodComment = comments.find((c) => EMOJIS.some((e) => c.commentContent?.includes(e)));
            setMood(moodComment ? EMOJIS.find((e) => moodComment.commentContent.includes(e)) : null);
        });
    }, [user]);

    return (
        <div className="grid gap-16 px-4 py-8">
            <div className="grid gap-6">
                <div className="grid gap-1 pt-10 text-center">
                    <h1 className="font-display text-4xl text-primary lg:text-5xl">COMPORTEMENT</h1>
                    <h2 className="font-display text-2xl text-primary lg:text-3xl">d'aujourd'hui</h2>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-5">
                    {EMOJIS.map((emoji, index) => (
                        <div
                            className={`flex w-[100px] items-center justify-center transition-all md:w-[120px] ${
                                emoji === mood ? "text-7xl md:text-8xl" : "text-4xl grayscale opacity-50 md:text-5xl"
                            }`}
                            key={index}
                        >
                            {emoji}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid gap-6">
                <div className="grid gap-1 text-center">
                    <h1 className="font-display text-4xl text-primary lg:text-5xl">ABSENCES</h1>
                    <h2 className="font-display text-2xl text-primary lg:text-3xl">de la semaine</h2>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {BUDS_LIST.map((bud, index) => (
                        <div className="grid justify-items-center gap-2" key={index}>
                            <img className="h-[90px] w-[90px]" src={bud.isPresent === true ? Present : bud.isPresent === false ? Absent : Bud} alt="" />
                            <p className="text-gray-mid">{bud.day}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid gap-6">
                <div className="text-center">
                    <h1 className="font-display text-4xl text-primary lg:text-5xl">MENU</h1>
                    <Menu></Menu>
                </div>
            </div>
        </div>
    );
}

export default CetteSemaine;
