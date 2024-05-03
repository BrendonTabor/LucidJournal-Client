import { useEffect, useState } from "react";
import { getWakeMethod } from "../Services/wakeMethodService.jsx";

export const WakeMethodSelect = ({ entryData, setEntryData }) => {
    const [wakeMethod, setWakeMethod] = useState([]);

    useEffect(() => {
        getWakeMethod().then(setWakeMethod);
    }, [entryData]);

    const handleChange = (e) => {
        setEntryData({
            ...entryData,
            wake_method: parseInt(e.target.value)
        });
    };

    return (
        <div className="select-wrapper">
            <label> What was the wake method? :</label>
            <select
                id="wake_method-select"
                value={entryData.wake_method.id || entryData.wake_method}
                onChange={handleChange}
            >
                <option value="">Select wake method</option>
                {wakeMethod.map((method, index) => (
                    <option key={index} value={method.id}>
                        {method.label}
                    </option>
                ))}
            </select>
        </div>
    );
};