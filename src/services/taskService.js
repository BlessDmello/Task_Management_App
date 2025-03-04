let tasks = [
  { id: 1, title: 'Complete Project Report', description: 'Finish the quarterly report', assignedTo: 'hod1', status: 'pending', createdAt: '2025-03-01' }
];

const hodList = [
  { id: 1, name: 'HOD 1', username: 'hod1' },
  { id: 2, name: 'HOD 2', username: 'hod2' }
];

export const getHODList = () => {
  return hodList;
};

export const updateTaskStatus = async (taskId, status) => {
    try {
      // Assuming tasks are stored in localStorage or API
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks = tasks.map(task =>
        task.id === taskId ? { ...task, status } : task
      );
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return true;
    } catch (error) {
      console.error('Error updating task:', error);
      return false;
    }
  };

export const createTask = (taskData) => {
  const newTask = {
    id: tasks.length + 1,
    ...taskData,
    status: 'pending',
    createdAt: new Date().toISOString().split('T')[0]
  };
  
  tasks.push(newTask);
  return { success: true, task: newTask };
};

export const getAllTasks = () => {
  return tasks;
};

export const getTasksByHOD = (hodUsername) => {
  return tasks.filter(task => task.assignedTo === hodUsername);
};