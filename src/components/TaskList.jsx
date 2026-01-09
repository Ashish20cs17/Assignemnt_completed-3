import TaskItem from "./TaskItem";

function TaskList({ tasks, completeTask, deleteTask }) {
  if (tasks.length === 0) return <p>No tasks yet!</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
