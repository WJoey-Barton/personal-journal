import { useMonthlyTasks } from "../hooks/useMonthlyTasks";
import { resolveMonthlyTasks, findApplicableMonthlyTask } from "../utils/monthlyTaskUtils";

function MonthlyTaskCard() {
    const { monthlyTasks } = useMonthlyTasks();
    const resolved = resolveMonthlyTasks(monthlyTasks);
    const { task, isExactMatch } = findApplicableMonthlyTask(resolved);

    return (
        <div>
            <h2>{task.resolvedDay} - {task.theme}</h2>
            {!isExactMatch && <p> Not today's task -- showing the nearest upcoming one</p>}
            <ul>
                {task.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MonthlyTaskCard;