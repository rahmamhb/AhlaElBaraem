import { BRANDING } from "./config/branding"
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
        <div className="w-full">
            <div>
                <img src={FooterWave} alt="footerwave" className="w-full"></img>
            </div>
            <div className="-mt-2 grid w-full grid-rows-2 justify-items-center gap-32 bg-primary px-4 py-10 font-poppins text-white">
                <div className="grid grid-cols-1 justify-center gap-12 sm:grid-cols-2 sm:gap-24 md:gap-48">
                    <div className="grid gap-3">
                        <div className="grid grid-cols-[auto_1fr] items-center gap-6">
                            <Mail style={{ height: 35, width: 40 }} />
                            <p className="text-base">{BRANDING.contact.email}</p>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] items-center gap-6">
                            <Phone style={{ height: 35, width: 40 }} />
                            <p className="text-base">{BRANDING.contact.phone}</p>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] items-center gap-6">
                            <Place style={{ height: 35, width: 40 }} />
                            <p className="text-base">{BRANDING.contact.addressLine1}, {BRANDING.contact.addressLine2}</p>
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <div className="grid grid-cols-[auto_1fr] items-center gap-6">
                            <ScheduleIcon style={{ height: 35, width: 40 }} />
                            <div>
                                <p>{BRANDING.hours.openDays} : {BRANDING.hours.openHours}</p>
                                <p>{BRANDING.hours.closedDays} : {BRANDING.hours.closedLabel}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a href={BRANDING.social.facebook} target="_blank" rel="noopener noreferrer"><Facebook /></a>
                            <a href={BRANDING.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram /></a>
                            <a href={BRANDING.social.youtube} target="_blank" rel="noopener noreferrer"><YouTube /></a>
                        </div>
                    </div>
                </div>
                <p className="text-sm">Copyright © 2026 {BRANDING.institutionName} <a href="/"> - </a></p>
            </div>
        </div>
    );
}

export default Footer;
