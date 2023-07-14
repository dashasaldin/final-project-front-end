export const initializeTimes = () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return { times: availableTimes, selectedTime: "17:00" };
};

export const updateTimes = (state, time) => {
  return { ...state, selectedTime: time };
};
