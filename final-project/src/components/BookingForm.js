import React from "react";
import { useState } from "react";
import { AvailableTimes } from "./AvailableTimes.js";

export const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [numberOfGuests, setnumberOfGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setnumberOfGuests("1");
    props.setAvailableTime("");
    setOccasion("Birthday");
    setName("");
    setEmail("");
    props.submitForm(e);
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            props.onDateChange(new Date(e.target.value));
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <AvailableTimes {...props} />

        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          value={numberOfGuests}
          onChange={(e) => setnumberOfGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make a reservation</button>
      </form>
    </div>
  );
};
