import { useState, useEffect } from "react";
import { loadData, saveData } from "../data/storage";
import { monthlyTasksSeed } from "../data/monthlyTasksSeed";

const STORAGE_KEY = "monthlyTasks";

export function useMonthlyTasks() {
    const [monthlyTasks, setMonthlyTasks] = useState(() => 
        loadData(STORAGE_KEY, monthlyTasksSeed)
    );

    useEffect(() => {
        saveData(STORAGE_KEY, monthlyTasks);
    }, [monthlyTasks]);

    return { monthlyTasks, setMonthlyTasks };
}