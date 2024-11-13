import { useState, useEffect } from "react";
import { AvailableTimes } from "./AvailableTimes.js";

const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [numberOfGuests, setnumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [invalidInput, setInvalidInput] = useState({
    name: false,
    email: false,
    date: false,
    numberOfGuests: false,
    occasion: false,
  });
  const [touchedInput, setTouchedInput] = useState({
    name: false,
    email: false,
    date: false,
    numberOfGuests: false,
    occasion: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const isFieldValid = (field, value) => {
    switch (field) {
      case "name":
        return namePattern.test(value);
      case "email":
        return emailPattern.test(value);
      case "date":
        return value !== "";
      case "numberOfGuests":
        return !isNaN(value) && parseInt(value) > 0;
      case "occasion":
        return value !== "";
      default:
        return true;
    }
  };

  const inputChange = (field, value) => {
    const touchedInputObj = {};
    if (field === "name") {
      setName(value);
      touchedInputObj.name = true;
    } else if (field === "email") {
      setEmail(value);
      touchedInputObj.email = true;
    } else if (field === "date") {
      setDate(value);
      touchedInputObj.date = true;
    } else if (field === "numberOfGuests") {
      setnumberOfGuests(value);
      touchedInputObj.numberOfGuests = true;
    } else if (field === "occasion") {
      setOccasion(value);
      touchedInputObj.occasion = true;
    }
    setTouchedInput((old) => ({ ...old, ...touchedInputObj }));
  };

  useEffect(() => {
    const invalidFieldsObj = {};

    if (!isFieldValid("name", name)) {
      invalidFieldsObj.name = true;
    }
    if (!isFieldValid("email", email)) {
      invalidFieldsObj.email = true;
    }
    if (!isFieldValid("date", date)) {
      invalidFieldsObj.date = true;
    }
    if (!isFieldValid("guests", numberOfGuests)) {
      invalidFieldsObj.guests = true;
    }
    if (!isFieldValid("occasion", occasion)) {
      invalidFieldsObj.occasion = true;
    }

    setInvalidInput(invalidFieldsObj);

    const hasInvalidFields = Object.values(invalidFieldsObj).some(
      (value) => value
    );
    setIsFormValid(!hasInvalidFields);
  }, [name, email, date, numberOfGuests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Please fill all fields");
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
          onChange={(e) => inputChange("name", e.target.value)}
        />
        {touchedInput.name && invalidInput.name && (
          <span className="error-message">Please enter a valid name.</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          type="email"
          autoComplete="off"
          value={email}
          required
          onChange={(e) => inputChange("email", e.target.value)}
        />
        {touchedInput.email && invalidInput.email && (
          <span className="error-message">
            Please enter a valid email address.
          </span>
        )}

        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          required
          onChange={(e) => {
            inputChange("date", e.target.value);
            props.onDateChange(new Date(e.target.value));
          }}
        />
        {touchedInput.date && invalidInput.date && (
          <span className="error-message">Please select the date.</span>
        )}

        <label htmlFor="res-time">Choose time</label>
        <AvailableTimes {...props} />

        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          placeholder="Choose a number of guests"
          min={1}
          value={numberOfGuests}
          required
          onChange={(e) => inputChange("numberOfGuests", e.target.value)}
        />
        {touchedInput.numberOfGuests && invalidInput.numberOfGuests && (
          <span className="error-message">
            Please enter the number of guests.
          </span>
        )}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          required
          onChange={(e) => inputChange("occasion", e.target.value)}
        >
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {touchedInput.occasion && invalidInput.occasion && (
          <span className="error-message">Please select the occasion.</span>
        )}
        <button aria-label="On Click" type="submit" disabled={!isFormValid}>
          Make a reservation
        </button>
      </form>
    </div>
  );
};
