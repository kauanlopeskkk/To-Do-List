import { useRecoilState } from 'recoil';
import { filterAtom } from '../atoms/filterAtom';

function FilterButtons() {
    const [filter, setFilter] = useRecoilState(filterAtom);

    return (
        <div className="filter-bar">
            <button className="filter-button" onClick={() => setFilter('all')}>
                Todas
            </button>
            <button className="filter-button" onClick={() => setFilter('completed')}>
                Concluídas
            </button>
            <button className="filter-button" onClick={() => setFilter('pending')}>
                Pendentes
            </button>
            <p className="filter-text">Filtro atual: {filter}</p>
        </div>
    );
}
export default FilterButtons;