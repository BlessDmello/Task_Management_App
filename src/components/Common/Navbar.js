import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const userRole = localStorage.getItem('userRole');
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    navigate('/');
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Task Management</Link>
      
        <div className="navbar-nav me-auto">
        {!isAuthenticated && (
          <>
            <Link className="nav-link" to="/admin/login">Admin Login</Link>
            <Link className="nav-link" to="/hod/login">HOD Login</Link>
          </>
        )}
        </div>

        {isAuthenticated && (
          <>
            <div className="navbar-nav me-auto">
              {userRole === 'admin' && (
                <>
                  <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
                  <Link className="nav-link" to="/admin/create-task">Create Task</Link>
                  <Link className="nav-link" to="/admin/tasks">Task List</Link>
                </>
              )}
              
              {userRole === 'hod' && (
                <>
                  <Link className="nav-link" to="/hod/dashboard">Dashboard</Link>
                  <Link className="nav-link" to="/hod/tasks">My Tasks</Link>
                </>
              )}
            </div>
            
            <div className="navbar-nav ms-auto">
              <span className="nav-link">
                Welcome, {localStorage.getItem('username')}!
              </span>
              <button className="btn btn-outline-light" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;