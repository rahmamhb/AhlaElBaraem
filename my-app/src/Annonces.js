import NavBar1 from "./NavBar1";
import "./Annonces.css"

import wave from "./assets/wave.png"
import recru from "./assets/recrutement.png"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Footer from "./Footer";
const Annonces = () => {
    return ( 
        <div className="annonces-page">
            <div className="annonces-Header">
                <NavBar1></NavBar1>
                <div className="wave-top">
                    <img src={wave} alt="wave" className="wave"/>
                </div>
            </div>
            <div className="annonces-container">
                <p style={{fontSize:"3.5em"}}> Annonces</p>
                <div className="annonce-container">
                    <div className="ann-card">
                        <div className="card-text">
                            <p className="title">Annonce de recrutement </p>
                            <p className="desc">ici c’est pour la description du recrutement ici c’est pour la description du recrutement ici c’est pour la description du recrutement</p>
                            <span></span>
                            <div className="dates">
                                <div className="date">
                                    <CalendarMonthIcon></CalendarMonthIcon>
                                    <p>02 / 03 / 2023</p>
                                </div>
                                <div className="date">
                                    <ScheduleIcon></ScheduleIcon>
                                    <p>14 : 30 - 18 : 30</p>
                                </div>
                            </div>
                        </div>
                        <img src={recru} alt="illustration"></img>
                    </div>
                    <div className="ann-card">
                        <div className="card-text">
                            <p className="title">Annonce de recrutement </p>
                            <p className="desc">ici c’est pour la description du recrutement ici c’est pour la description du recrutement ici c’est pour la description du recrutement</p>
                            <span></span>
                            <div className="dates">
                                <div className="date">
                                    <CalendarMonthIcon></CalendarMonthIcon>
                                    <p>02 / 03 / 2023</p>
                                </div>
                                <div className="date">
                                    <ScheduleIcon></ScheduleIcon>
                                    <p>14 : 30 - 18 : 30</p>
                                </div>
                            </div>
                        </div>
                        <img src={recru} alt="illustration"></img>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Annonces;