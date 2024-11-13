import { fetchAPI } from "./components/API";

export const initializeTimes = () => {
  const availableTimes = fetchAPI(new Date());
  return { times: availableTimes, selectedTime: "" };
};

export const updateSelectedTime = (state, time) => {
  return { ...state, selectedTime: time };
};

export const updateAvailableTimes = (state, date) => {
  const availableTimes = fetchAPI(date);
  return { ...state, times: availableTimes };
};
