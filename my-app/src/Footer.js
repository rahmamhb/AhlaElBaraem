import { BRANDING } from "./config/branding"
import FooterWave from "./assets/footerwave.png"
import Mail from '@mui/icons-material/MailOutline';
import Place from '@mui/icons-material/PlaceOutlined';
import Phone from '@mui/icons-material/LocalPhoneOutlined';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Facebook from '@mui/icons-material/FacebookRounded';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';

const ICON_SIZE = { height: 20, width: 20 };

const Footer = () => {
    return (
        <div className="w-full">
            <div>
                <img src={FooterWave} alt="footerwave" className="w-full"></img>
            </div>
            <div className="-mt-2 w-full bg-primary px-6 py-12 font-poppins text-white sm:px-10 lg:px-16">
                <div className="mx-auto grid w-full max-w-5xl gap-10 sm:grid-cols-3">
                    <div className="grid gap-3">
                        <div className="flex items-center gap-3">
                            <Mail style={ICON_SIZE} className="flex-shrink-0" />
                            <p className="text-sm">{BRANDING.contact.email}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone style={ICON_SIZE} className="flex-shrink-0" />
                            <p className="text-sm">{BRANDING.contact.phone}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Place style={ICON_SIZE} className="flex-shrink-0" />
                            <p className="text-sm">{BRANDING.contact.addressLine1}, {BRANDING.contact.addressLine2}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <ScheduleIcon style={ICON_SIZE} className="flex-shrink-0" />
                        <div className="text-sm">
                            <p>{BRANDING.hours.openDays} : {BRANDING.hours.openHours}</p>
                            <p>{BRANDING.hours.closedDays} : {BRANDING.hours.closedLabel}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 sm:justify-end">
                        <a href={BRANDING.social.facebook} target="_blank" rel="noopener noreferrer"><Facebook style={ICON_SIZE} /></a>
                        <a href={BRANDING.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram style={ICON_SIZE} /></a>
                        <a href={BRANDING.social.youtube} target="_blank" rel="noopener noreferrer"><YouTube style={ICON_SIZE} /></a>
                    </div>
                </div>
                <div className="mx-auto mt-10 w-full max-w-5xl border-t border-white/20 pt-6 text-center text-xs text-white/70">
                    Copyright © 2026 {BRANDING.institutionName}. Tous droits réservés.
                </div>
            </div>
        </div>
    );
}

export default Footer;
