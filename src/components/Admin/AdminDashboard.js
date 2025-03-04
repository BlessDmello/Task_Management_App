import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTasks } from '../../services/taskService';

const AdminDashboard = () => {
  const [taskCount, setTaskCount] = useState(0);
  
  useEffect(() => {
    const tasks = getAllTasks();
    setTaskCount(tasks.length);
  }, []);
  
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Tasks</h5>
              <p className="card-text display-4">{taskCount}</p>
              <Link to="/admin/tasks" className="btn btn-light">View All</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Create New Task</h5>
              <p className="card-text">Assign tasks to HODs</p>
              <Link to="/admin/create-task" className="btn btn-light">Create Task</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;