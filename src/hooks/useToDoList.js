import { useState, useEffect } from "react";
import { loadData, saveData } from "../data/storage";
import { createTask } from "../data/taskModel";

const STORAGE_KEY = "todos";

export function useToDoList() {
    const [tasks, setTasks] = useState(() => loadData(STORAGE_KEY, []));

    useEffect(() => {
        saveData(STORAGE_KEY, tasks);
    }, [tasks]);

    function addTask(text) {
        if(!text.trim()) return;
        setTasks((prev) => [...prev, createTask(text.trim())]);
    }

    function toggleTask(id) {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    function deleteTask(id) {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }

    return { tasks, addTask, toggleTask, deleteTask };
}