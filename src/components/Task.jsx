const Task = ({ task }) => {
  return <h3 key={task.id}>{task.body}</h3>;
};

export default Task;
