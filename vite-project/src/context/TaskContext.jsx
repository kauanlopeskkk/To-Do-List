import { useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TaskContext } from './task-context';

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      text: trimmedText,
      completed: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const removeTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [filter, tasks]);

  const value = {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    removeTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
