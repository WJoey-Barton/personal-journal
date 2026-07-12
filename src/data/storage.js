const STORAGE_PREFIX = "journal-app:";

export function loadData(key, fallback) {
    try {
        const raw = localStorage.getItem(STORAGE_PREFIX + key);
        if (raw === null) return fallback;
        return JSON.parse(raw);
    } catch (error) {
        console.error(`Failed to load "${key}" from storage:`, error);
        return fallback;
    }
}

export function saveData(key, value) {
    try {
        localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (error) {
        console.error(`Failed to save "${key}" to storage:`, error);
    }
}