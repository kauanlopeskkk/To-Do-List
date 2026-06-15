import './Que.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

function App() {
    return (
        <div className="app-shell">
            <div className="app-card">
                <h1>To-do List com Recoil</h1>

                <TaskForm />

                <div className="controls">
                    <FilterButtons />
                    <TaskList />
                </div>
            </div>
        </div>
    );
}

export default App;