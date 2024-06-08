import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const DateRangeContext = createContext();

// Crear un hook para usar el contexto
export const useDateRange = () => {
  return useContext(DateRangeContext);
};

// Crear el proveedor del contexto
export const DateRangeProvider = ({ children }) => {
  const [dateRangeData, setDateRangeData] = useState({
    startDate: '',
    endDate: '',
    price: 0,
  });

  const updateDateRangeData = (newData) => {
    setDateRangeData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <DateRangeContext.Provider value={{ dateRangeData, updateDateRangeData }}>
      {children}
    </DateRangeContext.Provider>
  );
};

export default DateRangeContext;
