import { getCollection, updateDb, getSession, setSession, asPromise } from "../db";
import { nextId } from "../ids";

function sanitize(user) {
    if (!user) return null;
    const { password, ...rest } = user;
    return rest;
}

export function login(email, password) {
    const users = getCollection("users");
    const user = users.find((u) => u.email.toLowerCase() === String(email).toLowerCase() && u.password === password);
    if (!user) return asPromise({ ok: false, error: "Identifiants incorrects" });
    setSession({ userId: user.id });
    return asPromise({ ok: true, user: sanitize(user) });
}

export function logout() {
    setSession(null);
    return asPromise({ ok: true });
}

export function getCurrentUser() {
    const session = getSession();
    if (!session) return asPromise(null);
    const users = getCollection("users");
    const user = users.find((u) => u.id === session.userId);
    return asPromise(sanitize(user));
}

export function registerFamily({ childPrenom, childNom, childDateNaissance, childSexe, parentName, parentEmail, allergies, alimentsPreferes, seNourritSeul, independant }) {
    const childId = nextId("child");
    const userId = nextId("u-parent");

    updateDb((db) => {
        db.children.push({
            id: childId,
            prenom: childPrenom,
            nom: childNom,
            childName: `${childPrenom} ${childNom}`,
            dateNaissance: childDateNaissance,
            sexe: childSexe,
            age: null,
            photo: null,
            parentId: userId,
            allergies: allergies && allergies.length ? allergies : ["Aucune allergie connue"],
            alimentsPreferes: alimentsPreferes && alimentsPreferes.length ? alimentsPreferes : [],
            seNourritSeul: !!seNourritSeul,
            independant: !!independant,
            medicaments: ["Aucun"],
            conditionsMedicales: ["Aucune"],
            vaccins: [],
            antecedents: "",
            instructionsSpeciales: "",
            registrationStatus: "pending",
        });
        db.users.push({
            id: userId,
            email: parentEmail,
            password: "demo1234",
            role: "parent",
            name: parentName,
            childId,
            registrationStatus: "pending",
        });
    });

    setSession({ userId });
    return asPromise({ ok: true, userId, childId });
}

export function approveRegistration(childId) {
    updateDb((db) => {
        const child = db.children.find((c) => c.id === childId);
        if (child) child.registrationStatus = "approved_incomplete";
        const parent = db.users.find((u) => u.childId === childId);
        if (parent) parent.registrationStatus = "approved_incomplete";
    });
    return asPromise({ ok: true });
}

export function rejectRegistration(childId) {
    updateDb((db) => {
        const parent = db.users.find((u) => u.childId === childId);
        db.children = db.children.filter((c) => c.id !== childId);
        if (parent) db.users = db.users.filter((u) => u.id !== parent.id);
    });
    return asPromise({ ok: true });
}

export function completeMedicalForm(childId, medicalData) {
    updateDb((db) => {
        const child = db.children.find((c) => c.id === childId);
        if (child) {
            Object.assign(child, medicalData, { registrationStatus: "active" });
        }
        const parent = db.users.find((u) => u.childId === childId);
        if (parent) parent.registrationStatus = "active";
    });
    return asPromise({ ok: true });
}
