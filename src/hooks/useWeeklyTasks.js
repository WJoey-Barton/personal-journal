import { useState, useEffect } from "react";
import { loadData, saveData } from "../data/storage";
import { weeklyTasksSeed } from "../data/weeklyTasksSeed";

const STORAGE_KEY = "weeklyTasks";

export function useWeeklyTasks() {
  const [weeklyTasks, setWeeklyTasks] = useState(() =>
    loadData(STORAGE_KEY, weeklyTasksSeed)
  );

  useEffect(() => {
    saveData(STORAGE_KEY, weeklyTasks);
  }, [weeklyTasks]);

  return { weeklyTasks, setWeeklyTasks };
}