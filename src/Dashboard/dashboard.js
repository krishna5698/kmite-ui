
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="dashboard-widgets">
        <div className="widget">
          <h3>Statistics</h3>
          <p>View key metrics and performance data here.</p>
        </div>
        <div className="widget">
          <h3>Recent Activity</h3>
          <p>Keep track of your recent activities and updates.</p>
        </div>
        <div className="widget">
          <h3>Notifications</h3>
          <p>View recent notifications and alerts here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
