import { useState, useEffect } from "react";
import { loadData, saveData } from "../data/storage";

const STORAGE_KEY = "countdown";
const DEFAULT_COUNTDOWN = { label: "Wedding", date: ""};

export function useCountdown() {
    const [countdown, setCountdown] = useState(() =>
        loadData(STORAGE_KEY, DEFAULT_COUNTDOWN)
    );

    useEffect(() => {
        saveData(STORAGE_KEY, countdown);
    }, [countdown]);

    function updateCountdown(label, date) {
        setCountdown({ label, date});
    }

    return { countdown, updateCountdown };
}