import React from 'react';
import { useDatePicker } from '../../context/DatePickerContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDatePicker();

  const handleChange = (event) => {
    setRecurrence({ ...recurrence, frequency: event.target.value });
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Recurrence Pattern</label>
      <select
        value={recurrence.frequency}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-md"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
