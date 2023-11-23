// BookingForm.js
import React from "react";

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    dispatchOnDateChange(selectedDate);
  };

  const handleTimeSelection = (selectedTime) => {
    // Handle time selection logic
  };

  const handleSubmit = () => {
    submitData(/* formData */);
  };

  return (
    <form>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="res-guests">Number of guests</label>
      <input type="number" id="res-guests" min="1" />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="button" onClick={handleSubmit}>
        Submit reservation
      </button>
    </form>
  );
};

export default BookingForm;
