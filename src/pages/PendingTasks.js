import React from 'react';
import TaskCard from '../components/TaskCard';

function PendingTasks({ tasks, toggleComplete, deleteTask }) {
  const pending = tasks.filter(task => !task.completed);

  // Sort pending tasks by deadline ascending
  const sortedPending = [...pending].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div>
      <h1>Pending Tasks</h1>
      <div className="task-list">
        {sortedPending.length === 0 ? (
          <p className="no-tasks">No pending tasks.</p>
        ) : (
          sortedPending.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PendingTasks;
