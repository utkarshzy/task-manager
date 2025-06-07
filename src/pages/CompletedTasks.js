import React from 'react';
import TaskCard from '../components/TaskCard';

function CompletedTasks({ tasks, toggleComplete, deleteTask }) {
  const completed = tasks.filter(task => task.completed);

  // Sort completed tasks by deadline ascending
  const sortedCompleted = [...completed].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div>
      <h1>Completed Tasks</h1>
      <div className="task-list">
        {sortedCompleted.length === 0 ? (
          <p className="no-tasks">No completed tasks.</p>
        ) : (
          sortedCompleted.map(task => (
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

export default CompletedTasks;
