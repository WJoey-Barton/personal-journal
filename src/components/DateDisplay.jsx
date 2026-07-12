import { getFormattedDate, getDayOfWeek, getWeekOfYear } from "../utils/dateUtils";

function DateDisplay() {
    const today = new Date();

    return (
        <div>
            <p>{getDayOfWeek(today)}, {getFormattedDate(today)}</p>
            <p>Week {getWeekOfYear(today)} of the year</p>
        </div>
    );
}

export default DateDisplay;