import { useState } from 'react';
import { useTasks } from '../hooks/useTasks';

export default function TaskForm() {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(text);
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        aria-label="Nova tarefa"
        onChange={(event) => setText(event.target.value)}
        placeholder="Digite uma nova tarefa"
        type="text"
        value={text}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
