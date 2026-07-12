import { useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { getDaysUntil, parseLocalDate } from "../utils/dateUtils";
import { formatDaysUntilText } from "../utils/textFormatters";


function Countdown() {
    const { countdown, updateCountdown } = useCountdown();
    const [isEditing, setIsEditing] = useState(!countdown.date);
    const [labelDraft, setLabelDraft] = useState(countdown.label);
    const [dateDraft, setDateDraft] = useState(countdown.date);

    function handleSave(e) {
        e.preventDefault();
        updateCountdown(labelDraft, dateDraft);
        setIsEditing(false);
    }

    return (
        <div>
            <h2>Countdown</h2>
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input
                        value={labelDraft}
                        onChange={(e) => setLabelDraft(e.target.value)}
                        placeholder="Event name"
                    />
                    <input
                        type="date"
                        value={dateDraft}
                        onChange={(e) => setDateDraft(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <p>{formatDaysUntilText(getDaysUntil(parseLocalDate(countdown.date)), countdown.label)}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default Countdown;