import { render, screen } from "@testing-library/react";
import { BookingForm } from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./Times";

test("renders the BookingForm label", () => {
  render(<BookingForm availableTimes={[]} />);
  const labelElement = screen.getByLabelText(/Choose date/);
  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes function should return correct state", () => {
  const result = initializeTimes();
  expect(result).toEqual({
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    selectedTime: "17:00",
  });
});

test("updateTimes functions should return the same value provided in the state", () => {
  const output = updateTimes({}, "17:00");
  expect(output).toEqual({ selectedTime: "17:00" });
});
