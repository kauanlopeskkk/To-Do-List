import { useRecoilState } from 'recoil';
import { filterAtom } from '../atoms/filterAtom';

function FilterButtons() {
    const [filter, setFilter] = useRecoilState(filterAtom);
    const filters = [
        { value: 'all', label: 'Todas' },
        { value: 'completed', label: 'Concluídas' },
        { value: 'pending', label: 'Pendentes' },
    ];

    return (
        <div className="filter-bar">
            {filters.map((item) => (
                <button
                    key={item.value}
                    className={`filter-button ${filter === item.value ? 'active' : ''}`}
                    type="button"
                    onClick={() => setFilter(item.value)}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}
export default FilterButtons;
