import { getCollection, updateDb, asPromise } from "../db";
import { nextId } from "../ids";

export function getChildren() {
    return asPromise(getCollection("children").filter((c) => c.registrationStatus !== "pending"));
}

export function getAllChildrenIncludingPending() {
    return asPromise(getCollection("children"));
}

export function getChildById(childId) {
    return asPromise(getCollection("children").find((c) => c.id === childId) || null);
}

export function getChildByParentId(parentId) {
    return asPromise(getCollection("children").find((c) => c.parentId === parentId) || null);
}

export function getChildrenByParentId(parentId) {
    return asPromise(getCollection("children").filter((c) => c.parentId === parentId && c.registrationStatus !== "pending"));
}

export function getPendingRegistrations() {
    return asPromise(getCollection("children").filter((c) => c.registrationStatus === "pending"));
}

export function createChild(child) {
    const id = nextId("child");
    updateDb((db) => {
        db.children.push({ id, registrationStatus: "active", ...child });
    });
    return asPromise({ ok: true, id });
}

export function updateChild(childId, patch) {
    updateDb((db) => {
        const child = db.children.find((c) => c.id === childId);
        if (child) Object.assign(child, patch);
    });
    return asPromise({ ok: true });
}

export function deleteChild(childId) {
    updateDb((db) => {
        db.children = db.children.filter((c) => c.id !== childId);
    });
    return asPromise({ ok: true });
}

export function getMatieres() {
    return asPromise(getCollection("matieres"));
}

export function createMatiere(matiere) {
    const id = nextId("mat");
    updateDb((db) => {
        db.matieres.push({ id, activities: [], ...matiere });
    });
    return asPromise({ ok: true, id });
}

export function addActivityToMatiere(matiereId, activity) {
    updateDb((db) => {
        const matiere = db.matieres.find((m) => m.id === matiereId);
        if (matiere) matiere.activities.push(activity);
    });
    return asPromise({ ok: true });
}

export function setMatiereToday(matiereId, isToday) {
    updateDb((db) => {
        const matiere = db.matieres.find((m) => m.id === matiereId);
        if (matiere) matiere.isToday = isToday;
    });
    return asPromise({ ok: true });
}

export function getComments(childId) {
    const all = getCollection("comments");
    return asPromise(childId ? all.filter((c) => c.childId === childId) : all);
}

export function addComment({ childId, childName, staffId, staffName, staffRole, content }) {
    const id = nextId("comment");
    updateDb((db) => {
        db.comments.unshift({
            id,
            childId,
            childName,
            staffId,
            staffName,
            staffRole,
            commentContent: content,
            addingDate: new Date().toISOString(),
        });
    });
    return asPromise({ ok: true, id });
}

export function getCompetences(childId) {
    const all = getCollection("competences");
    return asPromise(childId ? all.filter((c) => c.childId === childId) : all);
}

export function getAttendance(childId) {
    return asPromise(getCollection("attendance").filter((a) => a.childId === childId));
}

// status is "present", "absent", or null to clear back to "not marked yet".
export function setAttendance(childId, dayId, status) {
    updateDb((db) => {
        const existing = db.attendance.find((a) => a.childId === childId && a.dayId === dayId);
        if (!status) {
            db.attendance = db.attendance.filter((a) => a !== existing);
        } else if (existing) {
            existing.status = status;
        } else {
            db.attendance.push({ id: nextId("att"), childId, dayId, status });
        }
    });
    return asPromise({ ok: true });
}
