import React from 'react';
import { DatePickerProvider } from '../../context/DatePickerContext';
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationOptions from './CustomizationOptions';
import DatePreview from './DatePreview';

const DatePickerWrapper = () => {
  return (
    <DatePickerProvider>
      <div className="p-4 bg-white shadow-md rounded-lg w-full max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">Recurring Date Picker</h2>
        <RecurrenceOptions />
        <CustomizationOptions />
        <DatePreview />
      </div>
    </DatePickerProvider>
  );
};

export default DatePickerWrapper;
