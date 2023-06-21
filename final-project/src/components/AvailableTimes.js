import React, { useState } from "react";

export const AvailableTimes = () => {
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]
    const [availableTime, setAvailableTime] = useState("17:00")

    return (
        <select id="res-time"
        value = {availableTime}
        onChange={e => setAvailableTime(e.target.value)}
        >
        {availableTimes.map(time =>
            <option value={time} key={time}>
                {time}
            </option>
           )}
        </select>
    )
}