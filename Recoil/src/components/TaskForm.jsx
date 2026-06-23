import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tasksAtom } from '../atoms/taskAtom';

function TaskForm() {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useRecoilState(tasksAtom);

    const handleTextChange = (e) => setText(e.target.value);

    const addTask = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;

        const newTask = { id: Date.now(), text: text.trim(), completed: false };
        setTasks([...tasks, newTask]);
        setText('');
    };

    return (
        <form className="task-form" onSubmit={addTask}>
            <input
                className="task-input"
                type="text"
                placeholder="Digite uma tarefa..."
                value={text}
                onChange={handleTextChange}
            />
            <button className="task-submit" type="submit">
                Adicionar tarefa
            </button>
        </form>
    );
}

export default TaskForm;
