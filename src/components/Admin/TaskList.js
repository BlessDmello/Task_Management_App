import React, { useState, useEffect } from 'react';
import { getAllTasks } from '../../services/taskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const taskList = getAllTasks();
    setTasks(taskList);
  }, []);
  
  return (
    <div>
      <h2>All Tasks</h2>
      
      {tasks.length === 0 ? (
        <div className="alert alert-info">No tasks found.</div>
      ) : (
        <div className="table-responsive mt-3">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Assigned To</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.assignedTo}</td>
                  <td>
                    <span className={`badge ${
                      task.status === 'completed' ? 'bg-success' : 'bg-warning'
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td>{task.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TaskList;
