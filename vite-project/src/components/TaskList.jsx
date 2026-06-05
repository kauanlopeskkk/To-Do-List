import { useTasks } from '../hooks/useTasks';

export default function TaskList() {
  const { filteredTasks, removeTask, toggleTask } = useTasks();

  if (filteredTasks.length === 0) {
    return <p className="empty-state">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <li className="task-item" key={task.id}>
          <label>
            <input
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              type="checkbox"
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
            </span>
          </label>
          <button
            aria-label={`Remover ${task.text}`}
            onClick={() => removeTask(task.id)}
            type="button"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
