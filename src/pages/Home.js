import React from 'react';
import TaskCard from '../components/TaskCard';

function Home({ addTask, title, setTitle, deadline, setDeadline, tasks, toggleComplete, deleteTask }) {
  // Sort tasks by deadline ascending
  const sortedTasks = [...tasks].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <>
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="task-list">
        {sortedTasks.length === 0 ? (
          <p className="no-tasks">No tasks added.</p>
        ) : (
          sortedTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Home;
