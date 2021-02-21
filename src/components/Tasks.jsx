import Task from './Task';
import { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
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
  ]);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
