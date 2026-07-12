export function createTask(text) {
    return {
        id: crypto.randomUUID(),
        text,
        completed: false,
    };
}