import React from "react";
import { useDatePicker } from "../context/DatePickerContext";
import RecurrenceOptions from "./RecurrenceOptions";

const DatePreview = () => {
  const { startDate, endDate, recurrencePattern, recurrenceDetails } =
    useDatePicker();

  const renderRecurrenceDates = () => {
    const { startDate, endDate, recurrencePattern, recurrenceDetails } =
      useDatePicker();
    const getParticularDayOfDate = (date) => {
      const dayIndex = date.getDay();
      const adjustedDayIndex = ((dayIndex + 6) % 7) + 1;
      return adjustedDayIndex; 
    };
    const dates = [];

    if (startDate && endDate) {
      let currentDate = new Date(startDate);
   
      while (currentDate <= endDate) {
        const currentDay = getParticularDayOfDate(currentDate);
        console.log("this", currentDay);
        if (recurrenceDetails.specificDays.length > 0) {
          if (recurrenceDetails.specificDays.includes(currentDay)) {
            dates.push(new Date(currentDate));
          }
        } 
        else {
          dates.push(new Date(currentDate));
        }
        switch (recurrencePattern) {
          case "daily":
            currentDate.setDate(currentDate.getDate() + parseInt(recurrenceDetails.interval));
            break;

          case "weekly":
            currentDate.setDate(currentDate.getDate() + 7 * parseInt(recurrenceDetails.interval));
            break;
         
          case "monthly":
            currentDate.setMonth(currentDate.getMonth() + parseInt(recurrenceDetails.interval));
            break;

         
          case "yearly":
            currentDate.setFullYear(currentDate.getFullYear() + parseInt(recurrenceDetails.interval));
            break;

          default:
            break;
        }
      }
    }

    return (
      <div className="mt-2">
        {dates.length > 0 ? (
          <ul>
            {dates.map((date, index) => (
              <li key={index} className="text-gray-700">
                {date.toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No recurring dates found.</p>
        )}
      </div>
    );
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Date Preview</h2>
      {startDate && endDate ? (
        <div>
          <p>Start Date: {startDate.toLocaleDateString()}</p>
          <p>End Date: {endDate.toLocaleDateString()}</p>
          <p>Recurrence Pattern: {recurrencePattern}</p>
          {renderRecurrenceDates()}
        </div>
      ) : (
        <p>Please select a start and end date.</p>
      )}
    </div>
  );
};

export default DatePreview;
