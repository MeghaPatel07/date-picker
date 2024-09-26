import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DatePreview from './DatePreview';
import { useDatePicker } from '../context/DatePickerContext';

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDatePicker();

  return (
    <div className="px-20 py-7 mx-20 mr-10">
      <h1 className="text-xl font-bold mb-4 py-2">Recurring Dates</h1>
        <div className="flex space-x-20 justify-between">
      <div className="mb-4 ">
        <label className="block mb-1">Start Date:</label>
        <input
          type="date"
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="p-3 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">End Date:</label>
        <input
          type="date"
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="p-3 border rounded-md"
        />
      </div>
      </div>
      <RecurrenceOptions />
      <DatePreview />
    </div>
  );
};

export default DatePicker;
