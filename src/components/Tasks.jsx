const tasks = [
  {
    id: 1,
    body: 'Task 1',
  },
  {
    id: 2,
    body: 'Task 2',
  },
  {
    id: 3,
    body: 'Task 3',
  },
];

const Tasks = () => {
  return (
      <div>{tasks.map((task) => (<h3>{task.body}</h3>))}</div>
  );
};

export default Tasks;
