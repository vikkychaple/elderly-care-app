import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const MedicationManagement = () => {
  const [medications, setMedications] = useState([]);

  // Simulate fetching medication data from an API
  useEffect(() => {
    // In a real-world scenario, you would fetch medication data from an API
    // For demonstration purposes, we'll use a static array
    const medicationsData = [
      { id: 1, name: 'Medication A', time: '08:00 AM' },
      { id: 2, name: 'Medication B', time: '12:30 PM' },
      { id: 3, name: 'Medication C', time: '06:00 PM' },
    ];

    setMedications(medicationsData);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Medication Management</h2>
      <ul className="list-group">
        {medications.map((medication) => (
          <li key={medication.id} className="list-group-item d-flex justify-content-between align-items-center">
            <strong>{medication.name}</strong>
            <span className="badge bg-primary">Take at {medication.time}</span>
          </li>
        ))}
      </ul>
      {/* Add additional medication management components here */}
    </div>
  );
};

export default MedicationManagement;
