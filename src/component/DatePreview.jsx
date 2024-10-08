import React from "react";
import { useDatePicker } from "../context/DatePickerContext";
import MiniCalendar from "./MiniCalendar";
import RecurrenceDates from "./RecurrenceDates";
const DatePreview = () => {
  const { startDate, endDate, recurrencePattern, recurrenceDetails } =
    useDatePicker();
  const recurringDates = RecurrenceDates();

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Date Preview</h2>
      {startDate && endDate ? (
        <div>
          <p>Start Date: {startDate.toLocaleDateString()}</p>
          <p>End Date: {endDate.toLocaleDateString()}</p>
          {/* <p>Recurrence Pattern: {recurrencePattern}</p> */}
          <MiniCalendar dates={recurringDates} startDate={startDate} />
        </div>
      ) : (
        <p>Please select a start and end date.</p>
      )}
    </div>
  );
};

export default DatePreview;
