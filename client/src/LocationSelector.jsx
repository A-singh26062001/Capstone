import React, { useState } from 'react';
import './LocationSelector.css'; // Import your CSS file for styling
import thapar from './thapar.png';
import CosCycleBooking from './CosCycleBooking'; // Make sure to import the CosCycleBooking component
import { Link } from 'react-router-dom'; // Import the Link component for navigation

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState(''); // State to store the selected location

  // Function to handle location selection
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="location-selector">
      <h2>Choose a Location</h2>
      <div className="location-map">
        <img src={thapar} alt="Location Map" />
      </div>
      <div className="location-dropdown">
        <label htmlFor="location">Select a Location:</label>
        <select
          id="location"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">Select</option>
          <option value="HostelM">Hostel M</option>
          <option value="TAN">TAN</option>
          <option value="Main Gate">Main Gate</option>
        </select>
      </div>

      {/* Conditionally render a Link component */}
      {selectedLocation === 'HostelM' && (
        <Link to="/CosCycleBooking">Book a ride from Hostel M</Link>
      )}
    </div>
  );
};

export default LocationSelector;
