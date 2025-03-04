import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import CreateTask from './components/Admin/CreateTask';
import TaskList from './components/Admin/TaskList';
import HODLogin from './components/HOD/HODLogin';
import HODDashboard from './components/HOD/HODDashboard';
import HODTaskList from './components/HOD/HODTaskList';
import Navbar from './components/Common/Navbar';
import ProtectedRoute from './components/Common/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Navigate to="/admin/login" />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/hod/login" element={<HODLogin />} />
          
          {/* Admin protected routes */}
          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/tasks" element={<TaskList />} />
          </Route>
          
          {/* HOD protected routes */}
          <Route element={<ProtectedRoute role="hod" />}>
            <Route path="/hod/dashboard" element={<HODDashboard />} />
            <Route path="/hod/tasks" element={<HODTaskList />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;