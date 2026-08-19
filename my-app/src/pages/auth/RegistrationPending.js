import { BRANDING } from "../../config/branding";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegistrationPending = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <div className="grid min-h-screen w-full place-items-center px-6">
            <div className="grid max-w-md justify-items-center gap-6 rounded-3xl bg-white p-10 text-center shadow-lg">
                <img src={BRANDING.logo} alt={BRANDING.institutionName} className="h-16 w-16" />
                <h1 className="font-display text-3xl text-gray-dark">Inscription en cours de validation</h1>
                <p className="font-poppins text-gray-mid">Merci pour votre inscription. Notre équipe examine votre dossier — vous recevrez l'accès dès que votre inscription sera acceptée.</p>
                <button onClick={handleLogout} className="rounded-full border border-primary px-6 py-2 font-poppins text-primary transition hover:bg-primary hover:text-white">se déconnecter</button>
            </div>
        </div>
    );
}

export default RegistrationPending;
