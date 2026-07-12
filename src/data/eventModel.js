export function createEvent(label, date) {
    return {
        id: crypto.randomUUID(),
        label,
        date,
    };
}