import { render, screen } from "@testing-library/react";
import { BookingForm } from "./components/BookingForm";
import { initializeTimes, updateAvailableTimes } from "./Times";

jest.mock("./components/API", () => ({ fetchAPI: () => ["10:00", "10:30"] }));

test("renders the BookingForm label", () => {
  render(<BookingForm availableTimes={[]} />);
  const labelElement = screen.getByLabelText(/Choose date/);
  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes function returns non-empty array of available booking times", () => {
  const result = initializeTimes();
  expect(result).toEqual({
    times: ["10:00", "10:30"],
    selectedTime: "",
  });
});

test("updateAvailableTimes functions updates the available times based on the selected date", () => {
  const output = updateAvailableTimes({}, new Date());
  expect(output).toEqual({ times: ["10:00", "10:30"] });
});
