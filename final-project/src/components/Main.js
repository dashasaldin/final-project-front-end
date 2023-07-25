import React from "react";
import { Homepage } from "./Homepage";
import { BookingPage } from "./BookingPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import {
  initializeTimes,
  updateAvailableTimes,
  updateSelectedTime,
} from "../Times";
import { ConfirmationPage } from "./ConfirmedBooking";
import { submitAPI } from "./API";

function availableTimeReducer(state, action) {
  switch (action.type) {
    case "UPDATE_SELECTED_TIME":
      return updateSelectedTime(state, action.payload);
    case "UPDATE_DATE":
      return updateAvailableTimes(state, action.payload);
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export const Main = () => {
  const [state, dispatch] = useReducer(availableTimeReducer, initializeTimes());
  const navigate = useNavigate();

  function submitForm(formData) {
    const submittedForm = submitAPI(formData);
    if (submittedForm) {
      return navigate("/confirmed-booking");
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/booking"
        element={
          <BookingPage
            selectedTime={state.selectedTime}
            setAvailableTime={(time) =>
              dispatch({ type: "UPDATE_SELECTED_TIME", payload: time })
            }
            onDateChange={(date) =>
              dispatch({ type: "UPDATE_DATE", payload: date })
            }
            availableTimes={state.times}
            submitForm={submitForm}
          />
        }
      ></Route>
      <Route path="/confirmed-booking" element={<ConfirmationPage />}></Route>
    </Routes>
  );
};
