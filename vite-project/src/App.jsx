// App.jsx
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Lista de Tarefas</h1>

      <TaskForm />
      <FilterButtons />
      <TaskList />
    </main>
  );
}

export default App;
