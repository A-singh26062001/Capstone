import React, { useState } from 'react';
import './LocationSelector.css'; // Import your CSS file for styling
import thapar from'./thapar.png';
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
          <option value="COS">COS</option>
          <option value="TAN">TAN</option>
          <option value="Main Gate">Main Gate</option>
        </select>
      </div>
    </div>
  );
};

export default LocationSelector;
