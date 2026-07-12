import { useState, useEffect } from "react";
import { loadData, saveData } from "../data/storage";
import { createEvent } from "../data/eventModel";

const STORAGE_KEY = "events";

export function useEvents() {
    const [events, setEvents] = useState(() => loadData(STORAGE_KEY, []));

    useEffect(() => {
        saveData(STORAGE_KEY, events);
    }, [events]);

    function addEvent(label, date) {
        if(!label.trim() || !date) return;
        setEvents((prev) => [...prev, createEvent(label.trim(), date)]);
    }

    function deleteEvent(id) {
        setEvents((prev) => prev.filter((event) => event.id !== id));
    }

    return { events, addEvent, deleteEvent };
}