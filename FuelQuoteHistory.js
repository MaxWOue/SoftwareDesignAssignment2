import React, { useState } from 'react';
import './FuelQuoteHistory.css';

const FuelQuoteHistory = () => {
  const [lastDateUsed, setLastDateUsed] = useState(new Date().toLocaleDateString());
  const [desiredAmount, setDesiredAmount] = useState('1');
  const [deliveryAddress, setDeliveryAddress] = useState('123 Main Street');
  const [deliveryDate, setDeliveryDate] = useState(new Date().toLocaleDateString());
  const [suggestedPrice, setSuggestedPrice] = useState('NA');
  const [totalAmountDue, setTotalAmountDue] = useState('100');

  return (
    <div className="fuel-quote-history-container"> {}
      <h1>Fuel Quote History</h1>
      <div className="label-container"> {}
        <div className="grey-box"></div> {}
        <div className="label-row"> {}
          <label className="bold-label">Last Date Used:</label>
          <span>{` ${lastDateUsed}`}</span> {}
        </div>
        <div className="label-row">
          <label className="bold-label">Desired amount of fuel in gallons:</label>
          <span>{` ${desiredAmount}`}</span>
        </div>
        <div className="label-row">
          <label className="bold-label">Delivery address:</label>
          <span>{` ${deliveryAddress}`}</span>
        </div>
        <div className="label-row">
          <label className="bold-label">Delivery date:</label>
          <span>{` ${deliveryDate}`}</span>
        </div>
        <div className="label-row">
          <label className="bold-label">Suggested price per gallon:</label>
          <span>{` ${suggestedPrice}`}</span>
        </div>
        <div className="label-row">
          <label className="bold-label">Total Amount Due:</label>
          <span>{` ${totalAmountDue}`}</span>
        </div>
      </div>
    </div>
  );
};

export default FuelQuoteHistory;
