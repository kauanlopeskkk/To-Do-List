import { useTasks } from '../hooks/useTasks';

export default function FilterButtons() {
  const { filter, setFilter } = useTasks();
  const filters = [
    { label: 'Todas', value: 'all' },
    { label: 'Ativas', value: 'active' },
    { label: 'Completadas', value: 'completed' },
  ];

  return (
    <div className="filter-buttons">
      {filters.map((item) => (
        <button
          className={filter === item.value ? 'active' : ''}
          key={item.value}
          onClick={() => setFilter(item.value)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
