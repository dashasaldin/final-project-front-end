import React from "react";
import { Homepage } from "./Homepage";
import { BookingPage } from "./BookingPage";
import { Routes, Route} from "react-router-dom";
import { useReducer } from "react";

const initializeTimes = () => {
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]
    return { times: availableTimes, selectedTime: "17:00" };
}

const updateTimes = (state, time) => {
  return { ...state, selectedTime: time };
}

function availableTimeReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(state, action.payload);
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  }

export const Main = () => {
    const [state, dispatch] = useReducer(availableTimeReducer, initializeTimes())

    return (
    <Routes>
    <Route path="/"element={<Homepage/>}></Route>
    <Route path="/booking"element={<BookingPage selectedTime={state.selectedTime}
    setAvailableTime={(time) => dispatch({ type: 'UPDATE_TIMES', payload: time })} availableTimes={state.times} />}>
    </Route>
    </Routes>
    )
}

