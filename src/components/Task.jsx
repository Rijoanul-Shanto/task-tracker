import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3 key={task.id}>
        {task.body} <FaTimes onClick={onDelete} color="red"/>
      </h3>
    </div>
  );
};

export default Task;
