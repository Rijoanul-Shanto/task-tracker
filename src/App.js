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
    console.log('delete...', id);
  };

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
