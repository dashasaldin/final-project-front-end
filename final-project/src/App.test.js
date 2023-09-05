import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./components/BookingForm";
import { initializeTimes, updateAvailableTimes } from "./Times";

jest.mock("./components/API", () => ({ fetchAPI: () => ["10:00", "10:30"] }));

test("renders the BookingForm label", () => {
  render(<BookingForm availableTimes={[]} />);
  const labelElement = screen.getByLabelText(/Choose date/);
  expect(labelElement).toBeInTheDocument();
});

test("validates invalid name", () => {
  render(<BookingForm availableTimes={[]} />);
  const inputName = screen.getByLabelText(/Name/);
  fireEvent.change(inputName, { target: { value: "1111" } });
  expect(screen.getByText("Please enter a valid name.")).toBeInTheDocument();
});

test("validates valid name", () => {
  render(<BookingForm availableTimes={[]} />);
  const inputName = screen.getByLabelText(/Name/);
  fireEvent.change(inputName, { target: { value: "Rob" } });
  expect(
    screen.queryByText("Please enter a valid name.")
  ).not.toBeInTheDocument();
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
