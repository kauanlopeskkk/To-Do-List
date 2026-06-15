import { useRecoilState } from 'recoil';
import { tasksAtom } from '../atoms/taskAtom';

function TaskItem({ task }) {
  const [tasks, setTasks] = useRecoilState(tasksAtom);

  const toggleTask = () => {
    const updated = tasks.map(item =>
      item.id === task.id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTasks(updated);
  };

  const removeTask = () => {
    setTasks(tasks.filter(item => item.id !== task.id));
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>

      <div className="task-actions">
        <button className="task-action-button" onClick={toggleTask}>
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button>

        <button className="task-action-button remove" onClick={removeTask}>
          Remover
        </button>
      </div>
    </li>
  );
}

export default TaskItem;