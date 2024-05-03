import { useEffect, useState } from "react";
import { getRemCount } from "../Services/remCountService.jsx";

export const RemCountSelect = ({ entryData, setEntryData }) => {
    const [remCount, setRemCount] = useState([]);

    useEffect(() => {
        getRemCount().then(data => setRemCount(data));
    }, [entryData]);

    const handleChange = (e) => {
        setEntryData({
            ...entryData,
            rem_count: parseInt(e.target.value)
        });
    };

    return (
        <div className="select-wrapper">
            <label> Estimated Remcount :</label>
            <select
                id="rem_count-select"
                value={entryData.rem_count.id || entryData.rem_count}
                onChange={handleChange}
            >
                <option value="">Select Rem Count</option>
                {remCount.map((count, index) => (
                    <option key={index} value={count.id}>
                        {count.cycles_completed}
                    </option>
                ))}
            </select>
        </div>
    );
};