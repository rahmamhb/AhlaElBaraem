import { getCollection, updateDb, asPromise } from "../db";
import { nextId } from "../ids";

export function getStaff() {
    return asPromise(getCollection("staff"));
}

export function getStaffById(staffId) {
    return asPromise(getCollection("staff").find((s) => s.id === staffId) || null);
}

export function createStaffMember({ name, email, staffRole, password = "demo1234" }) {
    const id = nextId("u-staff");
    updateDb((db) => {
        db.staff.push({ id, name, email, staffRole, photo: null });
        db.users.push({ id, name, email, password, role: "staff", staffRole });
    });
    return asPromise({ ok: true, id });
}

export function updateStaffMember(staffId, patch) {
    updateDb((db) => {
        const staff = db.staff.find((s) => s.id === staffId);
        if (staff) Object.assign(staff, patch);
        const user = db.users.find((u) => u.id === staffId);
        if (user) Object.assign(user, patch);
    });
    return asPromise({ ok: true });
}

export function deleteStaffMember(staffId) {
    updateDb((db) => {
        db.staff = db.staff.filter((s) => s.id !== staffId);
        db.users = db.users.filter((u) => u.id !== staffId);
    });
    return asPromise({ ok: true });
}
