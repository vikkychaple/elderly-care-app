import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  // Placeholder data for heart rate chart
 

  return (
    <div className="container mt-5">
      <h2>Health Monitoring Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Heart Rate</h5>
              {/* <Line data={heartRateData} /> */}
              {/* <Line data={heartRateData} options={heartRateOptions} /> */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Blood Pressure</h5>
              {/* <Line data={bloodPressureData} /> */}
              {/* Add health metrics or charts for blood pressure */}
            </div>
          </div>
        </div>
      </div>
      {/* Add additional health metrics or charts here */}
    </div>
  );
};

export default Dashboard;
