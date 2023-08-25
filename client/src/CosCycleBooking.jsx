import React, { useState } from 'react';
import './CycleBooking.css'; // Import your CSS file for styling
import cos from './cos.jpg';
import { Link } from 'react-router-dom';


const CosCycleBooking = () => {
  // State to track the total available cycles and selected cycles
  const [totalCycles, setTotalCycles] = useState(10);
  const [selectedCycles, setSelectedCycles] = useState([]);

  // Function to handle cycle selection
  const handleCycleSelection = (cycleNumber) => {
    if (selectedCycles.includes(cycleNumber)) {
      // If the cycle is already selected, do nothing
      return;
    }

    // If the cycle is not selected, select it
    setSelectedCycles([...selectedCycles, cycleNumber]);
    setTotalCycles(totalCycles - 1);
  };

  return (
    <div className="cycle-booking">
      <div className="background-image">
        <h2>Total Available Cycles: {totalCycles}</h2>
        <div className="cycle-grid">
          {Array.from({ length: 10 }, (_, index) => (
            <Link to={`/booking/${index + 1}`} key={index}>
            <div
              key={index}
              className={`cycle ${selectedCycles.includes(index + 1) ? 'selected' : ''}`}
              onClick={() => handleCycleSelection(index + 1)}
            >
              {index + 1}
            </div>
          </Link>
          
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default CosCycleBooking;
