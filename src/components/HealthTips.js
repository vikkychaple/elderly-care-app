import React, { useState, useEffect } from 'react';

const HealthTips = () => {
  const [healthTips, setHealthTips] = useState([]);

  // Simulate fetching health tips from an API
  useEffect(() => {
    // In a real-world scenario, you would fetch tips from an API
    // For demonstration purposes, we'll use a static array
    const tipsArray = [
      'Stay hydrated by drinking plenty of water every day.',
      'Include colorful fruits and vegetables in your diet for essential nutrients.',
      'Take short walks to keep your body active and maintain flexibility.',
      'Ensure a good night\'s sleep for overall well-being.',
      'Engage in activities you enjoy to reduce stress and boost mood.',
    ];

    setHealthTips(tipsArray);
  }, []);

  return (
    <div className="container mt-5">
      <h2 >Daily Health Tips</h2>
      <ul className="list-group">
        {healthTips.map((tip, index) => (
          <li key={index} className="list-group-item">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthTips;
