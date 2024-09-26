import React, { useState } from 'react';
import { useDatePicker } from '../../context/DatePickerContext';

const DatePreview = () => {
  const { recurrence } = useDatePicker();
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to generate days for the current month
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
    const firstDay = new Date(year, month, 1).getDay(); // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
    
    // Create an array for the calendar
    const daysArray = Array(firstDay).fill(null).concat([...Array(daysInMonth).keys()].map(day => day + 1));
    
    // Fill the remaining days for a complete grid (7 columns)
    while (daysArray.length % 7 !== 0) {
      daysArray.push(null); // Fill with null for empty days
    }
    
    return daysArray;
  };

  // Function to change the month
  const changeMonth = (increment) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  // Function to change the year
  const changeYear = (increment) => {
    const newDate = new Date(currentDate.getFullYear() + increment, currentDate.getMonth());
    setCurrentDate(newDate);
  };

  const daysArray = generateCalendarDays();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeYear(-1)} className="p-2 bg-blue-500 text-white rounded-md">Previous Year</button>
        <h2 className="text-lg font-semibold">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={() => changeYear(1)} className="p-2 bg-blue-500 text-white rounded-md">Next Year</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="font-bold text-center">{day}</div>
        ))}
        {daysArray.map((day, index) => (
          <div key={index} className={`p-2 rounded-md text-center ${day ? 'bg-gray-100' : 'bg-transparent'}`}>
            {day || ''}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button onClick={() => changeMonth(-1)} className="p-2 bg-blue-500 text-white rounded-md">Previous Month</button>
        <button onClick={() => changeMonth(1)} className="p-2 bg-blue-500 text-white rounded-md">Next Month</button>
      </div>
    </div>
  );
};

export default DatePreview;
