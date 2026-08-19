import { getCollection, updateDb, asPromise } from "../db";
import { nextId } from "../ids";

// A "thread" is identified by `${staffId}__${parentId}`.
export function getThreadsForParent(parentId) {
    const all = getCollection("messages").filter((m) => m.parentId === parentId);
    return asPromise(all.sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate)));
}

export function getThreadsForStaff(staffId) {
    const all = getCollection("messages").filter((m) => m.staffId === staffId);
    return asPromise(all.sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate)));
}

export function getAllThreadsForAdmin() {
    const all = getCollection("messages");
    return asPromise(all.sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate)));
}

export function sendMessage({ staffId, parentId, senderId, senderName, role, content }) {
    const id = nextId("msg");
    updateDb((db) => {
        db.messages.unshift({
            id,
            threadId: `${staffId}__${parentId}`,
            staffId,
            parentId,
            senderId,
            senderName,
            role,
            messageReceived: content,
            addingDate: new Date().toISOString(),
        });
    });
    return asPromise({ ok: true, id });
}
