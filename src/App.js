// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import CompletedTasks from './pages/CompletedTasks';
import PendingTasks from './pages/PendingTasks';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!title || !deadline) return;
    const newTask = {
      id: Date.now(),
      title,
      deadline,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTitle('');
    setDeadline('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Router>
      <div className={darkMode ? 'app dark' : 'app'}>
        <Navbar />
        <div className="overlay">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  tasks={tasks}
                  setTasks={setTasks}
                  title={title}
                  setTitle={setTitle}
                  deadline={deadline}
                  setDeadline={setDeadline}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  addTask={addTask}
                  toggleComplete={toggleComplete}
                  deleteTask={deleteTask}
                />
              }
            />
            <Route
              path="/completed"
              element={<CompletedTasks tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />}
            />
            <Route
              path="/pending"
              element={<PendingTasks tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;