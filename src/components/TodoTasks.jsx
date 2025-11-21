import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../features/toggleSlice'
import './style.css'

const TodoTasks = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="hologram-text">NO ACTIVE MISSIONS</div>
        <div className="scan-line"></div>
      </div>
    )
  }

  return (
    <div className="tasks-container">
      {todos.map(todo => (
        <div key={todo.id} className={`task-card ${todo.completed ? 'completed' : ''}`}>
          <div className="task-border"></div>
          <div className="task-content">
            <button
              className="task-checkbox"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              <div className="checkbox-inner">
                {todo.completed && <span className="checkmark">✓</span>}
              </div>
            </button>
            <span className="task-text">{todo.text}</span>
            <button
              className="delete-btn"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <span className="delete-icon">×</span>
            </button>
          </div>
          <div className="task-glow"></div>
        </div>
      ))}
    </div>
  )
}

export default TodoTasks
