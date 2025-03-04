import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask, getHODList } from '../../services/taskService';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [hodList, setHODList] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const hods = getHODList();
    setHODList(hods);
    if (hods.length > 0) {
      setAssignedTo(hods[0].username);
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const result = createTask({
      title,
      description,
      assignedTo
    });
    
    if (result.success) {
      setMessage('Task created successfully!');
      // Clear form
      setTitle('');
      setDescription('');
      
      // Redirect after a brief delay
      setTimeout(() => {
        navigate('/admin/tasks');
      }, 1500);
    }
  };
  
  return (
    <div>
      <h2>Create New Task</h2>
      
      {message && (
        <div className="alert alert-success">{message}</div>
      )}
      
      <div className="card mt-3">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Task Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Task Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            
            <div className="mb-3">
              <label htmlFor="assignedTo" className="form-label">Assign to HOD</label>
              <select
                className="form-select"
                id="assignedTo"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                required
              >
                {hodList.map(hod => (
                  <option key={hod.id} value={hod.username}>
                    {hod.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary">Create Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;