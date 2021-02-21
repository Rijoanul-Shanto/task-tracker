import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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

  const handleTaskDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(id, 'task deleted...');
  };

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={handleTaskDelete} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
