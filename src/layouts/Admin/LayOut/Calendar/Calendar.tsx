import React from 'react';

const Calendar: React.FC = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

  const daysArray = Array.from({ length: firstDayOfMonth }).fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="grid grid-cols-7 text-center font-bold">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center mt-2">
        {daysArray.map((day, index) => (
          <div key={index} className="border p-2 h-16 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
