import { getLastDayOfMonth } from "./dateUtils";

export function resolveMonthlyTasks(monthlyTasksSeed, referenceDate = new Date()) {
    const lastDay = getLastDayOfMonth(referenceDate);
    const usedDays = new Set();
    const resolved = [];

    for (const task of monthlyTasksSeed) {
        const resolvedDay = task.day === "last" ? lastDay : task.day;
        if (usedDays.has(resolvedDay)) continue;
        usedDays.add(resolvedDay);
        resolved.push({...task, resolvedDay});
    }

    return resolved.sort((a, b) => a.resolvedDay - b.resolvedDay);
}

export function findApplicableMonthlyTask(resolvedTasks, referenceDate = new Date()) {
    const todayDayNumber = referenceDate.getDate();

    const exactMatch = resolvedTasks.find((task) => task.resolvedDay === todayDayNumber);
    if (exactMatch) return { task: exactMatch, isExactMatch: true };

    const upcoming = resolvedTasks.find((task) => task.resolvedDay > todayDayNumber);
    if (upcoming) return { task: upcoming, isExactMatch: false };

    return { task: resolvedTasks[0], isExactMatch: false };
}