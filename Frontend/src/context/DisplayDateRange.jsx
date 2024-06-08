import React from 'react';
import { useDateRange } from '../context/DateRangerContext.jsx'; // Ajusta la ruta según tu estructura de archivos

const DisplayDateRange = () => {
  const { dateRangeData } = useDateRange();

  return (
    <div className="display-date-range">
      <form className="form-readonly">
        <div className="form-group">
          <label htmlFor="displayStartDate">Start Date:</label>
          <input
            type="text"
            id="displayStartDate"
            value={dateRangeData.startDate}
            readOnly
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="displayEndDate">End Date:</label>
          <input
            type="text"
            id="displayEndDate"
            value={dateRangeData.endDate}
            readOnly
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="displayPrice">Total Price:</label>
          <input
            type="text"
            id="displayPrice"
            value={`$${dateRangeData.price}`}
            readOnly
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default DisplayDateRange;
