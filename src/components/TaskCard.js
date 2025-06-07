import React from 'react';

function TaskCard({ task, toggleComplete, deleteTask }) {
  const deadlineDate = new Date(task.deadline);
  const now = new Date();
  const diff = deadlineDate - now;

  const getCountdown = () => {
    if (diff <= 0) return '⏰ Past Due';
    const hrs = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hrs}h ${mins}m left`;
  };

  return (
    <div className={`task-card ${task.completed ? 'done' : ''}`}>
      <div className="card-content">
        <h3>{task.title}</h3>
        <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
        <p className="countdown">{getCountdown()}</p>
      </div>
      <div className="actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Done'}
        </button>
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;