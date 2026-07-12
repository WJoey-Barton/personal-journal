import { useState } from "react";
import { useToDoList } from "../hooks/useToDoList";

function ToDoList() {
    const { tasks, addTask, toggleTask, deleteTask } = useToDoList();
    const [draft, setDraft] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addTask(draft);
        setDraft("");
    }

    return (
        <div>
            <h2>To-Do</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Add a task"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>✕</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;