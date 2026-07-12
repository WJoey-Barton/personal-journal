import { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import { getDaysUntil, parseLocalDate } from "../utils/dateUtils";
import { formatDaysUntilText } from "../utils/textFormatters";

function compareByUpcoming(a, b) {
    const daysA = getDaysUntil(parseLocalDate(a.date));
    const daysB = getDaysUntil(parseLocalDate(b.date));
    const aIsPast = daysA < 0;
    const bIsPast = daysB < 0;

    if (aIsPast !== bIsPast) return aIsPast ? 1 : -1;
    return aIsPast ? daysB - daysA : daysA - daysB;
}

function EventList() {
    const { events, addEvent, deleteEvent } = useEvents();
    const [labelDraft, setLabelDraft] = useState("");
    const [dateDraft, setDateDraft] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addEvent(labelDraft, dateDraft);
        setLabelDraft("");
        setDateDraft("");
    }

    const sortedEvents = [...events].sort(compareByUpcoming);

    return (
        <div>
            <h2>Upcoming Events</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    value={labelDraft}
                    onChange={(e) => setLabelDraft(e.target.value)}
                    placeholder="Event Name" 
                />
                <input
                    type="date"
                    value={dateDraft}
                    onChange={(e) => setDateDraft(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {sortedEvents.map((event) => (
                    <li key={event.id}>
                        <span>
                            {formatDaysUntilText(getDaysUntil(parseLocalDate(event.date)), event.label)}
                        </span>
                        <button onClick={() => deleteEvent(event.id)}>✕</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EventList;