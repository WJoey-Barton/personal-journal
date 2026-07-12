export function getFormattedDate(date = new Date()) {
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function getDayOfWeek(date = new Date()) {
    return date.toLocaleDateString(undefined, { weekday: "long"});
}

export function getWeekOfYear(date = new Date()) {
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const dayNumber = (target.getDay() + 6) % 7; //Mon=0 Sun=6
    target.setDate(target.getDate() - dayNumber + 3); //Jump to this week's Thursday

    //Remaps the calendar day to ensure Jan 1 starts the new year's week
    //
    //Grabs Jan 4th and "anchors" it to Thursday for the whole year
    const firstThursday = new Date(target.getFullYear(), 0, 4);
    const firstDayNumber = (firstThursday.getDay() + 6) % 7;
    firstThursday.setDate(firstThursday.getDate() - firstDayNumber + 3);

    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    return 1 + Math.round((target - firstThursday) / msPerWeek);
}

export function parseLocalDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
}

export function getDaysUntil(targetDate, fromDate = new Date()) {
    const from = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
    const target = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());

    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((target - from) / msPerDay);
}

export function getLastDayOfMonth(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}