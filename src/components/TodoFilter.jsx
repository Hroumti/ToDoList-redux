import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../features/toggleSlice'
import './style.css'

const TodoFilter = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.todos.filter)

    const filters = [
        { value: 'all', label: 'All Quests' },
        { value: 'completed', label: 'Conquered' },
        { value: 'notCompleted', label: 'Pending' }
    ]

    return (
        <div className="filter-container">
            <span className="filter-label">🏰 Filter Thy Quests</span>
            <div className="filter-buttons">
                {filters.map(filter => (
                    <button
                        key={filter.value}
                        className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
                        onClick={() => dispatch(setFilter(filter.value))}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TodoFilter
