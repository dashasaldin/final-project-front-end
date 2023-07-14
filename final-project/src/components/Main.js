import React from "react";
import { Homepage } from "./Homepage";
import { BookingPage } from "./BookingPage";
import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { initializeTimes, updateTimes } from "../Times";

function availableTimeReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return updateTimes(state, action.payload);
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export const Main = () => {
  const [state, dispatch] = useReducer(availableTimeReducer, initializeTimes());

  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route
        path="/booking"
        element={
          <BookingPage
            selectedTime={state.selectedTime}
            setAvailableTime={(time) =>
              dispatch({ type: "UPDATE_TIMES", payload: time })
            }
            availableTimes={state.times}
          />
        }
      ></Route>
    </Routes>
  );
};
