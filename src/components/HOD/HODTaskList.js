import React, { useState, useEffect } from 'react';
import { getTasksByHOD, updateTaskStatus } from '../../services/taskService';

const HODTaskList = () => {
  const [tasks, setTasks] = useState([]);
  const username = localStorage.getItem('username');
  
//   useEffect(() => {
//     const taskList = getTasksByHOD(username);
//     setTasks(taskList);
//   }, [username]);
useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const taskList = await getTasksByHOD(username);
    setTasks(taskList);
  };

  const handleMarkComplete = async (taskId) => {
    const success = await updateTaskStatus(taskId, 'completed'); // API call or local update
    if (success) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, status: 'completed' } : task
        )
      );
    } else {
      alert('Failed to update task status.');
    }
  };
  
  return (
    <div>
      <h2>My Tasks</h2>
      
      {tasks.length === 0 ? (
        <div className="alert alert-info">No tasks assigned to you yet.</div>
      ) : (
        <div className="table-responsive mt-3">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <span className={`badge ${
                      task.status === 'completed' ? 'bg-success' : 'bg-warning'
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td>{task.createdAt}</td>
                  <td>
                    <button className="btn btn-sm btn-success" onClick={() => handleMarkComplete(task.id)}>
                      Mark Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HODTaskList;