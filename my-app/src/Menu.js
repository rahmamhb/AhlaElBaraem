import { useEffect, useState } from "react";
import * as menusApi from "./mock/api/menus";

const today = new Date();
const todayId = today.getDay();

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        menusApi.getWeekMenu().then(setMenu);
    }, []);

    return (
        <div className="mt-8 flex flex-wrap justify-center gap-5 px-4">
            {menu.map((menuday) => (
                <div key={menuday.id} className="w-full max-w-[280px] rounded-3xl p-6 shadow-[2px_2px_20px_rgba(0,0,0,0.25)]">
                    <div className={`mb-2 rounded-full px-4 py-2 text-center ${menuday.id === todayId ? "bg-[#FF5959]" : "bg-primary-light"}`}>
                        <h1 className="font-display text-2xl text-white">{menuday.day}</h1>
                    </div>
                    <div className="p-2 font-poppins">
                        <h3 className="p-1 text-lg font-normal text-primary-light">Petit-déjeuner</h3>
                        <h6 className="mb-2 text-center text-lg font-normal text-gray-mid">{menuday.petitdejeuner}</h6>
                        <h3 className="p-1 text-lg font-normal text-primary-light">Déjeuner</h3>
                        <h6 className="mb-2 text-center text-lg font-normal text-gray-mid">{menuday.dejeuner}</h6>
                        <h3 className="p-1 text-lg font-normal text-primary-light">Snack</h3>
                        <h6 className="mb-2 text-center text-lg font-normal text-gray-mid">{menuday.snack}</h6>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;
