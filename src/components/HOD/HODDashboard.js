import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTasksByHOD } from '../../services/taskService';

const HODDashboard = () => {
  const [taskCount, setTaskCount] = useState(0);
  const username = localStorage.getItem('username');
  
  useEffect(() => {
    const tasks = getTasksByHOD(username);
    setTaskCount(tasks.length);
  }, [username]);
  
  return (
    <div>
      <h2>HOD Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">My Tasks</h5>
              <p className="card-text display-4">{taskCount}</p>
              <Link to="/hod/tasks" className="btn btn-light">View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;