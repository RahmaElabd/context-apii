import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task .."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;