// Fake demo dataset for the SchoolSync mock backend.
// Everything here is fabricated placeholder content — no real people, no real
// institution. This is the ONLY place data should be hand-authored; every
// mock/api/* function reads/writes through mock/db.js instead of duplicating
// literals in components.
import childPhoto from "../assets/picture.png";
import staffPhoto from "../assets/staff.jpg";

const DEMO_PASSWORD = "demo1234";

export const MATIERES = [
    {
        id: "mat-dessin",
        matiereName: "Dessin",
        color: "255 181 133",
        activities: ["Dessin libre", "Dessin avec des objets", "Dessin à partir d'une histoire", "Dessin de portraits"],
    },
    {
        id: "mat-math",
        matiereName: "Math",
        color: "255 231 148",
        activities: ["Compter jusqu'à 10", "Reconnaître les formes", "Puzzle numérique"],
    },
    {
        id: "mat-civil",
        matiereName: "educ civil",
        color: "255 72 72",
        activities: ["Respect des règles", "Partage des jouets", "Politesse au quotidien"],
    },
    {
        id: "mat-islamic",
        matiereName: "educ islamic",
        color: "154 219 255",
        activities: ["Sourates courtes", "Valeurs et bonnes manières", "Histoires des prophètes"],
    },
    {
        id: "mat-arabe",
        matiereName: "arabe",
        color: "255 189 167",
        activities: ["Alphabet arabe", "Vocabulaire de base", "Chants en arabe"],
    },
    {
        id: "mat-francais",
        matiereName: "francais",
        color: "255 153 0",
        activities: ["Alphabet français", "Comptines", "Vocabulaire de base"],
    },
];

export const USERS = [
    { id: "u-admin", email: "admin@schoolsync-demo.com", password: DEMO_PASSWORD, role: "admin", name: "Admin SchoolSync" },

    { id: "u-staff-1", email: "nourrice1@schoolsync-demo.com", password: DEMO_PASSWORD, role: "staff", staffRole: "nourrice", name: "Sarah Amrani" },
    { id: "u-staff-2", email: "nourrice2@schoolsync-demo.com", password: DEMO_PASSWORD, role: "staff", staffRole: "nourrice", name: "Yasmine Boudiaf" },
    { id: "u-staff-3", email: "ortho1@schoolsync-demo.com", password: DEMO_PASSWORD, role: "staff", staffRole: "orthophoniste", name: "Karim Belaid" },
    { id: "u-staff-4", email: "ortho2@schoolsync-demo.com", password: DEMO_PASSWORD, role: "staff", staffRole: "orthophoniste", name: "Nadia Cherif" },
    { id: "u-staff-5", email: "psy1@schoolsync-demo.com", password: DEMO_PASSWORD, role: "staff", staffRole: "psychologue", name: "Sofiane Rahmani" },
    { id: "u-staff-6", email: "psy2@schoolsync-demo.com", password: DEMO_PASSWORD, role: "staff", staffRole: "psychologue", name: "Amel Ferhat" },

    { id: "u-parent-1", email: "parent1@schoolsync-demo.com", password: DEMO_PASSWORD, role: "parent", name: "Yacine Haddad", childId: "child-1", registrationStatus: "active" },
    { id: "u-parent-2", email: "parent2@schoolsync-demo.com", password: DEMO_PASSWORD, role: "parent", name: "Meriem Ouali", childId: "child-2", registrationStatus: "active" },
    { id: "u-parent-3", email: "parent3@schoolsync-demo.com", password: DEMO_PASSWORD, role: "parent", name: "Rachid Belkacem", childId: "child-3", registrationStatus: "active" },
    { id: "u-parent-4", email: "parent4@schoolsync-demo.com", password: DEMO_PASSWORD, role: "parent", name: "Samira Toumi", childId: "child-4", registrationStatus: "approved_incomplete" },
    { id: "u-parent-5", email: "parent5@schoolsync-demo.com", password: DEMO_PASSWORD, role: "parent", name: "Hocine Zeroual", childId: "child-5", registrationStatus: "pending" },
];

const EXTRA_CHILD_NAMES = [
    "Nassim Kaci", "Lyna Saadi", "Rayan Idir", "Kenza Aouadi", "Imad Slimani",
    "Dania Brahimi", "Anes Bouzid", "Melissa Guedjali", "Bilal Hamdi", "Sana Chettouh",
    "Ryad Benali", "Wissal Djaballah", "Mehdi Larbi", "Inès Merabet", "Sofia Yahiaoui",
];

function buildChild({ id, prenom, nom, age, sexe, parentId, registrationStatus = "active" }) {
    return {
        id,
        prenom,
        nom,
        childName: `${prenom} ${nom}`,
        dateNaissance: `2020-0${(id.length % 9) + 1}-15`.slice(0, 10),
        sexe,
        age,
        photo: childPhoto,
        parentId: parentId || null,
        pere: "Prénom Père",
        jobPere: "Profession",
        mere: "Prénom Mère",
        jobMere: "Profession",
        telephone: "+213 00 00 00 00",
        email: "famille@schoolsync-demo.com",
        adresse: "Ville, Wilaya",
        freres: 1,
        allergies: ["Aucune allergie connue"],
        alimentsPreferes: ["Fruits", "Pâtes"],
        seNourritSeul: true,
        independant: true,
        medicaments: ["Aucun"],
        conditionsMedicales: ["Aucune"],
        vaccins: ["Tétanos", "Hépatite B", "Poliomyélite"],
        antecedents: "Aucun antécédent particulier",
        instructionsSpeciales: "",
        registrationStatus,
    };
}

export const CHILDREN = [
    buildChild({ id: "child-1", prenom: "Yanis", nom: "Haddad", age: 3, sexe: "masculin", parentId: "u-parent-1" }),
    buildChild({ id: "child-1b", prenom: "Sami", nom: "Haddad", age: 5, sexe: "masculin", parentId: "u-parent-1" }),
    buildChild({ id: "child-2", prenom: "Lina", nom: "Ouali", age: 4, sexe: "féminin", parentId: "u-parent-2" }),
    buildChild({ id: "child-3", prenom: "Amira", nom: "Belkacem", age: 3, sexe: "féminin", parentId: "u-parent-3" }),
    buildChild({ id: "child-4", prenom: "Ilyes", nom: "Toumi", age: 5, sexe: "masculin", parentId: "u-parent-4" }),
    buildChild({ id: "child-5", prenom: "Sarah", nom: "Zeroual", age: 2, sexe: "féminin", parentId: "u-parent-5", registrationStatus: "pending" }),
    ...EXTRA_CHILD_NAMES.map((fullName, index) => {
        const [prenom, nom] = fullName.split(" ");
        return buildChild({
            id: `child-${index + 6}`,
            prenom,
            nom,
            age: 2 + (index % 4),
            sexe: index % 2 === 0 ? "masculin" : "féminin",
        });
    }),
];

export const STAFF = USERS.filter((u) => u.role === "staff").map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    staffRole: u.staffRole,
    photo: staffPhoto,
}));

const commentSeed = [
    { childId: "child-1", staffId: "u-staff-1", content: "Comportement du jour : 🥰 — Yanis a été très câlin et joyeux toute la journée." },
    { childId: "child-1", staffId: "u-staff-1", content: "Yanis a très bien participé à l'atelier dessin aujourd'hui, il progresse sur la tenue du crayon." },
    { childId: "child-2", staffId: "u-staff-1", content: "Lina a partagé ses jouets sans qu'on lui demande, très beau geste ce matin." },
    { childId: "child-3", staffId: "u-staff-3", content: "Amira commence à mieux articuler les sons 'r' et 's', on continue les exercices la semaine prochaine." },
    { childId: "child-4", staffId: "u-staff-4", content: "Ilyes a fait de bons progrès en vocabulaire pendant la séance de ce jour." },
    { childId: "child-1", staffId: "u-staff-5", content: "Yanis semble plus à l'aise dans le groupe cette semaine, moins d'appréhension le matin." },
    { childId: "child-3", staffId: "u-staff-6", content: "Amira a bien géré un moment de frustration aujourd'hui, on note une belle évolution." },
];

export const COMMENTS = commentSeed.map((c, index) => {
    const child = CHILDREN.find((ch) => ch.id === c.childId);
    const staff = USERS.find((u) => u.id === c.staffId);
    return {
        id: `comment-${index + 1}`,
        childId: c.childId,
        childName: child ? child.childName : "",
        staffId: c.staffId,
        staffName: staff ? staff.name : "",
        staffRole: staff ? staff.staffRole : "",
        commentContent: c.content,
        addingDate: new Date(Date.now() - index * 36e5 * 6).toISOString(),
    };
});

const ratings = ["red", "orange", "yellow", "green"];
export const COMPETENCES = ["child-1", "child-2", "child-3", "child-4", "child-5"].flatMap((childId, ci) =>
    MATIERES.slice(0, 3).map((matiere, mi) => ({
        id: `comp-${childId}-${matiere.id}`,
        childId,
        matiere: matiere.matiereName,
        activite1: matiere.activities[0] || "Activité 1",
        rating1: ratings[(ci + mi) % ratings.length],
        activite2: matiere.activities[1] || "Activité 2",
        rating2: ratings[(ci + mi + 2) % ratings.length],
        addingDate: new Date(Date.now() - (ci + mi) * 864e5).toISOString(),
    }))
);

// day ids aligned with JS Date.getDay() (0 = Dimanche ... 4 = Jeudi)
export const MENU = [
    { id: 0, day: "Dimanche", petitdejeuner: "Pain et confiture", dejeuner: "Poulet aux légumes", snack: "Yaourt aux fruits" },
    { id: 1, day: "Lundi", petitdejeuner: "Céréales et lait", dejeuner: "Riz et légumes sautés", snack: "Compote de pommes" },
    { id: 2, day: "Mardi", petitdejeuner: "Crêpes", dejeuner: "Pâtes bolognaise", snack: "Biscuits et lait" },
    { id: 3, day: "Mercredi", petitdejeuner: "Pain et fromage", dejeuner: "Poisson et purée", snack: "Smoothie banane" },
    { id: 4, day: "Jeudi", petitdejeuner: "Galette et miel", dejeuner: "Couscous légumes", snack: "Fromage et fruits" },
];

// day ids aligned with JS Date.getDay() (0 = Dimanche ... 4 = Jeudi), same
// convention as MENU. One record per (childId, dayId) — no absent record
// means "not marked yet" (shown neutral, not present/absent).
export const ATTENDANCE = [
    { id: "att-1", childId: "child-1", dayId: 0, status: "absent" },
    { id: "att-2", childId: "child-1", dayId: 1, status: "present" },
    { id: "att-3", childId: "child-1", dayId: 2, status: "present" },
];

export const ANNOUNCEMENTS = [
    { id: "ann-1", title: "Recrutement : éducateur/éducatrice", description: "Nous recherchons un(e) éducateur/éducatrice passionné(e) pour rejoindre notre équipe pédagogique.", date: "2026-09-02", time: "09:00 - 12:00" },
    { id: "ann-2", title: "Recrutement : assistant(e) orthophoniste", description: "Poste à pourvoir pour accompagner le suivi du langage des enfants inscrits.", date: "2026-09-10", time: "14:00 - 17:00" },
    { id: "ann-3", title: "Journée portes ouvertes", description: "Venez découvrir nos programmes et rencontrer l'équipe lors de notre journée portes ouvertes.", date: "2026-09-20", time: "10:00 - 16:00" },
    { id: "ann-4", title: "Fête de fin de trimestre", description: "Petite fête organisée pour les enfants et les familles à la fin du trimestre.", date: "2026-10-05", time: "14:30 - 18:30" },
];

const messageSeed = [
    { staffId: "u-staff-1", parentId: "u-parent-1", role: "nourrice", content: "Bonjour, Yanis a passé une très bonne journée aujourd'hui, il a bien mangé et bien dormi." },
    { staffId: "u-staff-1", parentId: "u-parent-1", role: "nourrice", content: "Petit rappel : merci de penser à ramener une tenue de rechange pour Yanis." },
    { staffId: "u-staff-3", parentId: "u-parent-3", role: "orthophoniste", content: "Amira progresse bien sur les exercices de prononciation, continuez à pratiquer à la maison si possible." },
    { staffId: "u-staff-5", parentId: "u-parent-1", role: "psychologue", content: "Petit échange rapide sur le comportement de Yanis ce matin, rien d'inquiétant, juste un peu fatigué." },
    { staffId: "u-staff-2", parentId: "u-parent-2", role: "nourrice", content: "Lina a très bien participé à l'atelier motricité aujourd'hui." },
    { staffId: "u-staff-4", parentId: "u-parent-4", role: "orthophoniste", content: "Ilyes a fait de bons progrès en vocabulaire, on continue sur cette lancée." },
];

export const MESSAGES = messageSeed.map((m, index) => {
    const staff = USERS.find((u) => u.id === m.staffId);
    return {
        id: `msg-${index + 1}`,
        threadId: `${m.staffId}__${m.parentId}`,
        staffId: m.staffId,
        parentId: m.parentId,
        senderId: m.staffId,
        senderName: staff ? staff.name : "",
        role: m.role,
        messageReceived: m.content,
        addingDate: new Date(Date.now() - index * 864e5).toISOString(),
    };
});

const avisSeed = [
    { parentId: "u-parent-1", childName: "Yanis", message: "Une équipe très à l'écoute, notre fils s'épanouit chaque jour un peu plus depuis son inscription.", status: "approved", daysAgo: 12 },
    { parentId: "u-parent-2", childName: "Lina", message: "Le suivi quotidien et les échanges avec les éducatrices nous rassurent énormément en tant que parents.", status: "approved", daysAgo: 6 },
    { parentId: "u-parent-3", childName: "Amira", message: "Amira progresse très bien avec l'orthophoniste, merci à toute l'équipe pour leur patience.", status: "pending", daysAgo: 1 },
];

export const AVIS = avisSeed.map((a, index) => {
    const parent = USERS.find((u) => u.id === a.parentId);
    return {
        id: `avis-${index + 1}`,
        parentId: a.parentId,
        parentName: parent ? parent.name : "",
        childName: a.childName,
        message: a.message,
        status: a.status,
        addingDate: new Date(Date.now() - a.daysAgo * 864e5).toISOString(),
    };
});

export function buildSeed() {
    return {
        users: USERS,
        children: CHILDREN,
        staff: STAFF,
        matieres: MATIERES,
        comments: COMMENTS,
        competences: COMPETENCES,
        menu: MENU,
        attendance: ATTENDANCE,
        announcements: ANNOUNCEMENTS,
        messages: MESSAGES,
        avis: AVIS,
    };
}
