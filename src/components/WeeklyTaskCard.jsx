import { useWeeklyTasks } from "../hooks/useWeeklyTasks";
import { getDayOfWeek } from "../utils/dateUtils";

function WeeklyTaskCard() {
  const { weeklyTasks } = useWeeklyTasks();
  const todayName = getDayOfWeek();
  const todayTasks = weeklyTasks.find((entry) => entry.day === todayName);

  if (!todayTasks) return null;

  return (
    <div>
      <h2>{todayTasks.day} — {todayTasks.theme}</h2>
      {todayTasks.sections.map((section) => (
        <div key={section.heading}>
          <h3>{section.heading}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default WeeklyTaskCard;