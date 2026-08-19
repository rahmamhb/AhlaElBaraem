import { buildSeed } from "./seed";

// Bump this whenever the seed shape changes so demo browsers auto-reseed
// instead of crashing on a stale localStorage shape.
const DB_KEY = "schoolsync_db_v1";
const SESSION_KEY = "schoolsync_session_v1";

function readRaw(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function writeRaw(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

let cache = null;

function load() {
    if (cache) return cache;
    const existing = readRaw(DB_KEY);
    cache = existing || buildSeed();
    if (!existing) writeRaw(DB_KEY, cache);
    return cache;
}

function persist() {
    writeRaw(DB_KEY, cache);
}

export function getCollection(name) {
    const db = load();
    return db[name] || [];
}

export function setCollection(name, items) {
    const db = load();
    db[name] = items;
    persist();
    return items;
}

export function updateDb(mutator) {
    const db = load();
    mutator(db);
    persist();
    return db;
}

export function resetDb() {
    cache = buildSeed();
    persist();
    return cache;
}

export function getSession() {
    return readRaw(SESSION_KEY);
}

export function setSession(session) {
    if (session) writeRaw(SESSION_KEY, session);
    else localStorage.removeItem(SESSION_KEY);
}

// Small helper so every mock/api/* call already "looks async" like a real
// fetch, making it a drop-in swap for a real backend later.
export function asPromise(value) {
    return Promise.resolve(value);
}
