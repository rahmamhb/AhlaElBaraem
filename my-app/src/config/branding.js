// Single source of truth for institution-specific copy.
// Swapping these values (or wiring this to a settings API later) re-skins
// the whole product for a different institution without touching components.
import SchoolSyncLogo from "../assets/schoolsync-logo.svg";

export const BRANDING = {
    institutionName: "SchoolSync",
    shortName: "SchoolSync",
    tagline: "Un monde de douceur pour les petits explorateurs en herbe",
    aboutBlurb:
        "SchoolSync accompagne les crèches et écoles maternelles au quotidien : suivi des activités, communication avec les familles et gestion de l'équipe, réunis dans un seul espace.",
    ageRange: "quelques mois à 6 ans",
    contact: {
        email: "contact@schoolsync-demo.com",
        secondaryEmail: "support@schoolsync-demo.com",
        phone: "+213 00 00 00 00",
        addressLine1: "123 Rue de la Pédagogie",
        addressLine2: "Ville, Wilaya",
    },
    hours: {
        openDays: "Dim - jeudi",
        openHours: "6 AM - 5.30 PM",
        closedDays: "Ven - sam",
        closedLabel: "fermée",
    },
    social: {
        facebook: "#",
        instagram: "#",
        youtube: "#",
    },
    logo: SchoolSyncLogo,
};

export default BRANDING;
