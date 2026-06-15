import { useRecoilState } from 'recoil';
import { tasksAtom } from '../../taskAtom';

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
    <li>
      <span
        style={{
          textDecoration: task.completed
            ? 'line-through'
            : 'none',
        }}
      >
        {task.text}
      </span>

      <button onClick={toggleTask}>
        {task.completed ? 'Desfazer' : 'Concluir'}
      </button>

      <button onClick={removeTask}>
        Remover
      </button>
    </li>
  );
}

export default TaskItem;