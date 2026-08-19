import { useEffect, useState } from "react";
import NavBar1 from "./NavBar1";
import wave from "./assets/wave.png"
import recru from "./assets/recrutement.png"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Footer from "./Footer";
import * as announcementsApi from "./mock/api/announcements";

const Annonces = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        announcementsApi.getAnnouncements().then(setAnnouncements);
    }, []);

    return (
        <div className="grid w-full justify-items-center gap-16">
            <div className="w-full">
                <NavBar1></NavBar1>
                <img src={wave} alt="wave" className="w-full"/>
            </div>
            <div className="grid w-full max-w-5xl justify-items-center gap-16 px-6">
                <p className="font-display text-5xl text-primary lg:text-7xl">Annonces</p>
                <div className="grid w-full gap-10">
                    {announcements.map((item) => (
                        <div key={item.id} className="grid grid-cols-1 items-center justify-center gap-8 rounded-[80px_0px_80px_0px] bg-white p-8 shadow-[0_7px_47px_rgba(0,0,0,0.25)] md:grid-cols-[1fr_auto] lg:rounded-[150px_0px_150px_0px] lg:p-16">
                            <div className="grid gap-6">
                                <p className="font-display text-3xl text-primary lg:text-4xl">{item.title}</p>
                                <p className="max-w-lg break-words font-poppins text-lg text-gray-dark">{item.description}</p>
                                <span className="h-0.5 w-full max-w-md bg-gray-dark"></span>
                                <div className="flex flex-wrap gap-8">
                                    <div className="flex items-center gap-2 text-gray-dark">
                                        <CalendarMonthIcon style={{ height: 30, width: 30 }} />
                                        <p>{item.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-dark">
                                        <ScheduleIcon style={{ height: 30, width: 30 }} />
                                        <p>{item.time}</p>
                                    </div>
                                </div>
                            </div>
                            <img src={recru} alt="illustration" className="mx-auto h-[220px] w-[220px] lg:h-[300px] lg:w-[300px]"></img>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Annonces;
