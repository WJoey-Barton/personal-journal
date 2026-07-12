export function formatDaysUntilText(daysLeft, label) {
    if (daysLeft === 0) return `Today is ${label}!`;
    if (daysLeft < 0) return `${label} was ${Math.abs(daysLeft)} days ago`;
    return `${daysLeft} days until ${label}`;
}