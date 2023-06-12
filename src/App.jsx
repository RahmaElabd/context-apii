
import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { TaskProvider } from './TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;