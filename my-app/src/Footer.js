import "./Footer.css"
import FooterWave from "./assets/footerwave.png"
import Mail from '@mui/icons-material/MailOutline';
import Place from '@mui/icons-material/PlaceOutlined';
import Phone from '@mui/icons-material/LocalPhoneOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Facebook from '@mui/icons-material/FacebookRounded';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
const Footer = () => {
    return ( 
        <div className="footer-page">
            <div className="wave-top">
                <img src={FooterWave} alt="footerwave" ></img>
            </div>
            <div className="footer-container">
                <div className="coordinates">
                    <div className="coor1">
                        <div className="contact1">
                            <Mail></Mail>
                            <p>ahlaelbaraem@gmail.com</p>
                        </div>
                        <div className="contact1">
                            <Phone></Phone>
                            <p>0559 37 95 99 </p>
                        </div>
                        <div className="contact1">
                            <Place></Place>
                            <p>Rue Belkacem Omar , Béjaïa</p>
                        </div>
                    </div>
                    <div className="coor2">
                        <div className="contact2">
                            <ScheduleIcon></ScheduleIcon>
                            <div className="text">
                                <p>Dim  - jeudi : 6 AM - 5.30 PM</p>
                                <p>Ven - sam : fermée  </p>
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="https://www.facebook.com/Cr%C3%A8che-Bara%C3%A9m-1817554448293433" target="_blank" rel="noopener noreferrer"><Facebook></Facebook> </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <Instagram></Instagram></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><YouTube></YouTube> </a>
                        </div>
                    </div>
                </div>
                <p>Copyright © 2023 créche maternelle Ahla el baraem <a href="/"> - </a></p>
            </div>
        </div>
     );
}
 
export default Footer;