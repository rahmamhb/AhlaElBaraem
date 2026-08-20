import { getCollection, updateDb, asPromise } from "../db";
import { nextId } from "../ids";

export function getApprovedAvis() {
    const all = getCollection("avis").filter((a) => a.status === "approved");
    return asPromise(all.sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate)));
}

export function getAvisForParent(parentId) {
    const all = getCollection("avis").filter((a) => a.parentId === parentId);
    return asPromise(all.sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate)));
}

export function getPendingAvis() {
    const all = getCollection("avis").filter((a) => a.status === "pending");
    return asPromise(all.sort((a, b) => new Date(a.addingDate) - new Date(b.addingDate)));
}

export function submitAvis({ parentId, parentName, childName, message }) {
    const id = nextId("avis");
    updateDb((db) => {
        db.avis.push({ id, parentId, parentName, childName, message, status: "pending", addingDate: new Date().toISOString() });
    });
    return asPromise({ ok: true, id });
}

export function approveAvis(id) {
    updateDb((db) => {
        const avis = db.avis.find((a) => a.id === id);
        if (avis) avis.status = "approved";
    });
    return asPromise({ ok: true });
}

export function rejectAvis(id) {
    updateDb((db) => {
        db.avis = db.avis.filter((a) => a.id !== id);
    });
    return asPromise({ ok: true });
}
