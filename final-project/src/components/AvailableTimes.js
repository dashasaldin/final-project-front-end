import React from "react";

export const AvailableTimes = (props) => {
    return (
        <select id="res-time"
        value = {props.selectedTime}
        onChange={e => props.setAvailableTime(e.target.value)}
        >
        {props.availableTimes.map(time =>
            <option value={time} key={time}>
                {time}
            </option>
           )}
        </select>
    )
}