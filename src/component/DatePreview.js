"use client"; // Must be the first line
import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const DatePreview = () => {
  const { recurrence } = useDatePicker();

  const generatePreviewDates = () => {
    return ['2024-09-01', '2024-09-02', '2024-09-03']; // Placeholder logic
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Selected Dates</label>
      <div className="grid grid-cols-7 gap-2">
        {generatePreviewDates().map((date, index) => (
          <div key={index} className="p-2 bg-gray-100 rounded-md text-center text-xs">
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePreview;
