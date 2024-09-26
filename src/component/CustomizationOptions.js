"use client"; // Must be the first line
import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const CustomizationOptions = () => {
  const { recurrence, setRecurrence } = useDatePicker();

  const handleIntervalChange = (event) => {
    setRecurrence({ ...recurrence, interval: event.target.value });
  };

  const handleSpecificDaysChange = (event) => {
    const value = parseInt(event.target.value);
    const newSpecificDays = recurrence.specificDays.includes(value)
      ? recurrence.specificDays.filter((day) => day !== value)
      : [...recurrence.specificDays, value];
    setRecurrence({ ...recurrence, specificDays: newSpecificDays });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Customize Recurrence</label>
      <input
        type="number"
        min="1"
        value={recurrence.interval}
        onChange={handleIntervalChange}
        className="w-full px-3 py-2 border rounded-md"
      />
      {/* Handle specific days */}
      {recurrence.frequency === 'weekly' && (
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Specific Days</label>
          {[...Array(7).keys()].map((day) => (
            <label key={day} className="mr-2">
              <input
                type="checkbox"
                value={day}
                checked={recurrence.specificDays.includes(day)}
                onChange={handleSpecificDaysChange}
              />
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomizationOptions;
