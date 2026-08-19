import wave from "./assets/wave.svg";
import waveTopWhite from "./assets/wavetopwhite.png";
import waveBottomWhite from "./assets/wavebottomwhite.png";
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
import PillTabs from "./PillTabs";

// Shared shell for the authenticated dashboards (Nourrice, StaffCommentDashboard,
// Parent, AdminLayout): navbar + wave header, floating pill tab switcher, wavy
// white content panel. Standardizes on the normal-flow wave image (the pattern
// Home.js/Parent.js/AdminLayout.js already used) instead of the absolute/
// pointer-events float that Nourrice/StaffCommentDashboard used to do it with.
const DashboardShell = ({ tabs, active, onChange, wave: showWave = true, footer = false, children }) => (
    <div className="grid w-full">
        <div>
            <NavBar1></NavBar1>
            <img src={wave} alt="wave" className="-mt-px block w-full" />
        </div>

        <div className="-mt-8">
            <PillTabs tabs={tabs} active={active} onChange={onChange} />
        </div>

        <div className="relative mt-6 bg-white">
            {showWave && (
                <img src={waveTopWhite} alt="" className="pointer-events-none absolute inset-x-0 top-0 w-full -translate-y-full" />
            )}
            <div className="bg-white py-6">{children}</div>
            {showWave && (
                <img src={waveBottomWhite} alt="" className="pointer-events-none absolute inset-x-0 bottom-0 w-full translate-y-full" />
            )}
        </div>

        {footer && <Footer></Footer>}
    </div>
);

export default DashboardShell;
