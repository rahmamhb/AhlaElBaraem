import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BRANDING } from "../../config/branding";
import { useAuth } from "../../context/AuthContext";
import { roleHomePath } from "../../routes/roleHome";
import childrenBg from "../../assets/registrationBg.png";

const DEMO_ACCOUNTS = [
    { label: "Parent démo", email: "parent1@schoolsync-demo.com" },
    { label: "Nourrice démo", email: "nourrice1@schoolsync-demo.com" },
    { label: "Orthophoniste démo", email: "ortho1@schoolsync-demo.com" },
    { label: "Psychologue démo", email: "psy1@schoolsync-demo.com" },
    { label: "Admin démo", email: "admin@schoolsync-demo.com" },
];
const DEMO_PASSWORD = "demo1234";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const doLogin = async (loginEmail, loginPassword) => {
        setError("");
        const result = await login(loginEmail, loginPassword);
        if (!result.ok) {
            setError(result.error || "Identifiants incorrects");
            return;
        }
        navigate(roleHomePath(result.user));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        doLogin(email, password);
    };

    return (
        <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
            <div className="hidden bg-cover bg-center md:block" style={{ backgroundImage: `url(${childrenBg})` }}></div>
            <div className="grid content-center justify-items-center gap-8 px-6 py-16">
                <div className="grid w-full max-w-sm gap-8">
                    <div>
                        <img src={BRANDING.logo} alt={BRANDING.institutionName} className="mb-2 h-16 w-16" />
                        <h1 className="font-display text-4xl text-gray-dark">Bienvenue !</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <input type="email" required placeholder="Addresse e-mail" className="rounded-lg border border-gray-light px-4 py-3 font-poppins focus:border-primary focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" required placeholder="mot de passe" className="rounded-lg border border-gray-light px-4 py-3 font-poppins focus:border-primary focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {error && <p className="text-sm text-primary">{error}</p>}
                        <button className="rounded-full bg-accent-orange px-6 py-3 font-poppins font-bold text-white transition hover:bg-accent-orange/80">se connecter</button>
                    </form>

                    <p className="font-poppins text-gray-mid">vous n'avez pas de compte ? <a href="/inscription" className="text-primary underline">inscrivez vous</a></p>

                    <div className="grid gap-2 rounded-xl bg-gray-100 p-4">
                        <p className="font-poppins text-sm font-semibold text-gray-dark">Connexion rapide (démo)</p>
                        <div className="flex flex-wrap gap-2">
                            {DEMO_ACCOUNTS.map((acc) => (
                                <button key={acc.email} type="button" className="rounded-full border border-primary px-3 py-1.5 text-sm text-primary transition hover:bg-primary hover:text-white" onClick={() => doLogin(acc.email, DEMO_PASSWORD)}>
                                    {acc.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
