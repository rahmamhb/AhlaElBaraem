import { getCollection, updateDb, asPromise } from "../db";

export function getWeekMenu() {
    return asPromise(getCollection("menu"));
}

export function updateMenuDay(dayId, patch) {
    updateDb((db) => {
        const day = db.menu.find((m) => m.id === dayId);
        if (day) Object.assign(day, patch);
    });
    return asPromise({ ok: true });
}
