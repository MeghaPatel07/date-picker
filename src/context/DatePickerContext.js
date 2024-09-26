"use client"; // Must be the first line
import React, { createContext, useState } from 'react';

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState({
    frequency: 'daily',
    interval: 1,
    specificDays: [],
    nthDay: null,
  });

  return (
    <DatePickerContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        recurrence,
        setRecurrence,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => React.useContext(DatePickerContext);
