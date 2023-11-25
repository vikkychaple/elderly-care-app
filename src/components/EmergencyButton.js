import React, { useState } from 'react';

const EmergencyButton = () => {
  const [emergencyDetails, setEmergencyDetails] = useState({
    name: '',
    location: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmergencyDetails({
      ...emergencyDetails,
      [name]: value,
    });
  };

  const handleEmergencyClick = () => {
    // Simulating emergency alert logic (replace with actual logic)
    const { name, location, message } = emergencyDetails;
    alert(`Emergency alert sent!\n\nName: ${name}\nLocation: ${location}\nMessage: ${message}`);
  };

  return (
    <div className="container mt-5">
      <h2>Emergency Assistance</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={emergencyDetails.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={emergencyDetails.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={emergencyDetails.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleEmergencyClick}>
          Send Emergency Alert
        </button>
      </form>
    </div>
  );
};

export default EmergencyButton;
