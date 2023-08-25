import React, { useState } from 'react';
import './CycleBooking.css'; // Import your CSS file for styling
import cos from './cos.jpg';

const CosCycleBooking = () => {
  // State to track the total available cycles and selected cycles
  const [totalCycles, setTotalCycles] = useState(10);
  const [selectedCycles, setSelectedCycles] = useState([]);

  // Function to handle cycle selection
  const handleCycleSelection = (cycleNumber) => {
    if (selectedCycles.includes(cycleNumber)) {
      // If the cycle is already selected, deselect it
      setSelectedCycles(selectedCycles.filter((cycle) => cycle !== cycleNumber));
      setTotalCycles(totalCycles + 1);
    } else {
      // If the cycle is not selected, select it
      setSelectedCycles([...selectedCycles, cycleNumber]);
      setTotalCycles(totalCycles - 1);
    }
  };

  return (
    <div className="cycle-booking">
      <div
        className="background-image"
      
      >
        <h2>Total Available Cycles: {totalCycles}</h2>
        <div className="cycle-grid">
          {Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              className={`cycle ${selectedCycles.includes(index + 1) ? 'selected' : ''}`}
              onClick={() => handleCycleSelection(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CosCycleBooking;
