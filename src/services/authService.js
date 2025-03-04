const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'hod1', password: 'hod123', role: 'hod' },
    { username: 'hod2', password: 'hod123', role: 'hod' }
  ];
  
  export const login = (username, password) => {
    const user = users.find(
      user => user.username === username && user.password === password
    );
    
    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('username', user.username);
      return { success: true, role: user.role };
    }
    
    return { success: false, message: 'Invalid credentials' };
  };