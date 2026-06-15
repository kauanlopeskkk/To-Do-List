import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tasksAtom } from '../../taskAtom';

function TaskForm() {
    const [text, setText] = useState('');
    const [tasks, setTasks] = useRecoilState(tasksAtom);

    const handleTextChange = (e) => setText(e.target.value);

    const addTask = () => {
        if (text.trim() === '') return;
        const newTask = { id: Date.now(), text: text.trim(), completed: false };
        setTasks([...tasks, newTask]);
        setText('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Digite uma tarefa..."
                value={text}
                onChange={handleTextChange}
            />
            <button onClick={addTask}>Adicionar tarefa</button>
        </div>
    );
}

export default TaskForm;