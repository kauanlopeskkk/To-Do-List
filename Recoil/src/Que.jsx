import TaskForm from './atoms/selectors/components/TaskForm';
import TaskList from './atoms/selectors/components/TaskList';
import FilterButtons from './atoms/selectors/components/FilterButtons';

function App() {
    return (
        <div style={{ padding: 20 }}>
            <h1>To-do List com Recoil</h1>

            <TaskForm />

            <div style={{ marginTop: 12 }}>
                <FilterButtons />
                <TaskList />
            </div>
        </div>
    );
}

export default App;