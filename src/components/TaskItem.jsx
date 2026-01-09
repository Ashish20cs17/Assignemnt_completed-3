function TaskItem({ task, completeTask, deleteTask }) {
  return (
    <li className={`task-item ${task.status.toLowerCase()}`}>
      <span>{task.task}</span>
      <div className="buttons">
        {task.status === "Pending" && (
          <button onClick={() => completeTask(task.id)}>Complete</button>
        )}
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
      <span className={`status ${task.status.toLowerCase()}`}>{task.status}</span>
    </li>
  );
}

export default TaskItem;
