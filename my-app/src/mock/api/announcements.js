import { getCollection, updateDb, asPromise } from "../db";
import { nextId } from "../ids";

export function getAnnouncements() {
    const all = getCollection("announcements");
    return asPromise(all.slice().sort((a, b) => new Date(a.date) - new Date(b.date)));
}

export function createAnnouncement({ title, description, date, time, image }) {
    const id = nextId("ann");
    updateDb((db) => {
        db.announcements.push({ id, title, description, date, time, image: image || null });
    });
    return asPromise({ ok: true, id });
}

export function deleteAnnouncement(id) {
    updateDb((db) => {
        db.announcements = db.announcements.filter((a) => a.id !== id);
    });
    return asPromise({ ok: true });
}
