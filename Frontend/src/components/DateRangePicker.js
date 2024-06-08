import React, { useState } from 'react';

const DateRangePicker = ({ pricePerDay }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState(0);

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    const newPrice = calculatePrice(newStartDate, endDate);
    setStartDate(newStartDate);
    setPrice(newPrice);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    const newPrice = calculatePrice(startDate, newEndDate);
    setEndDate(newEndDate);
    setPrice(newPrice);
  };

  const calculatePrice = (start, end) => {
    if (!start || !end) return 0;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * pricePerDay;
  };

  return (
    <div className="date-range-picker">
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate}
        />
      </div>
      <div>
        <p>Total Price: ${price}</p>
      </div>
    </div>
  );
};

export default DateRangePicker;