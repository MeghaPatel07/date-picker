import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const {
    recurrencePattern,
    setRecurrencePattern,
    recurrenceDetails,
    setRecurrenceDetails,
  } = useDatePicker();

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-100">Recurrence Options</h2>
      <select
        value={recurrencePattern}
        onChange={(e) => setRecurrencePattern(e.target.value)}
        className="p-2 border rounded-md mb-2"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <div>
        <label className="block mb-1">Every X:</label>
        <input
          type="number"
          value={recurrenceDetails.interval}
          onChange={(e) =>
            setRecurrenceDetails({
              ...recurrenceDetails,
              interval: e.target.value,
            })
          }
          className="p-2 border rounded-md mb-2"
        />
        <label className="block mb-1">Specific Days of Week:</label>
        <div className="flex space-x-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'].map((day,index) => (
            <label key={day}>
              <input
                type="checkbox"
                onChange={(e) => {
                  console.log("this",e.target.checked);
                  const days = e.target.checked
                    ? [...recurrenceDetails.specificDays, index+1]
                    : recurrenceDetails.specificDays.filter((d) => d !== index+1);
                    console.log("days",days);
                  setRecurrenceDetails({ ...recurrenceDetails, specificDays: days });
                  {console.log("this is :",days)}
                }}
              />
              {day}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecurrenceOptions;
