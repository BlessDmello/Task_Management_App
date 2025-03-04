import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ role }) => {
  // Check if user is authenticated and has the correct role
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const userRole = localStorage.getItem('userRole');
  
  if (isAuthenticated && userRole === role) {
    return <Outlet />; // Render child routes
  } else {
    // Redirect to appropriate login page
    return <Navigate to={`/${role}/login`} />;
  }
};

export default ProtectedRoute;