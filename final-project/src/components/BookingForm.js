import React, { useEffect } from "react";
import { useState } from "react";
import { AvailableTimes } from "./AvailableTimes.js";

const DEFAULT_VALIDITY_STATE = {
  isEmailValid: true,
  isNameValid: true,
};

const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [numberOfGuests, setnumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validityState, setValidityState] = useState(DEFAULT_VALIDITY_STATE);

  useEffect(() => {
    if (!namePattern.test(name)) {
      setValidityState((old) => ({ ...old, isNameValid: false }));
    }
  }, [name]);

  useEffect(() => {
    if (!emailPattern.test(email)) {
      setValidityState((old) => ({ ...old, isEmailValid: false }));
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validityState.isEmailValid || !validityState.isNameValid) {
      return;
    }

    setDate("");
    setnumberOfGuests("");
    props.setAvailableTime("");
    setOccasion("");
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
          autoComplete="off"
          value={name}
          required
          className={!validityState.isNameValid && "error-input"}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          type="email"
          autoComplete="off"
          value={email}
          className={!validityState.isEmailValid && "error-input"}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          required
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
          placeholder="Choose a number of guests"
          min="1"
          max="10"
          value={numberOfGuests}
          required
          onChange={(e) => setnumberOfGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          required
          placeholder="Select occasion"
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button
          type="submit"
          disabled={!validityState.isEmailValid || !validityState.isNameValid}
        >
          Make a reservation
        </button>
      </form>
    </div>
  );
};
