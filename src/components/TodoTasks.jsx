import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo } from '../features/toggleSlice'
import './style.css'

const TodoTasks = () => {
  const { todos, filter } = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed
    if (filter === 'notCompleted') return !todo.completed
    return true
  })

  const handleEditStart = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const handleEditSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText.trim() }))
    }
    setEditingId(null)
    setEditText('')
  }

  const handleEditCancel = () => {
    setEditingId(null)
    setEditText('')
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        <div className="hologram-text">NO ACTIVE MISSIONS</div>
        <div className="scan-line"></div>
      </div>
    )
  }

  return (
    <div className="tasks-container">
      {filteredTodos.map(todo => (
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

            {editingId === todo.id ? (
              <div className="edit-wrapper">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleEditSave(todo.id)
                    if (e.key === 'Escape') handleEditCancel()
                  }}
                />
                <div className="edit-actions">
                  <button
                    className="save-btn"
                    onClick={() => handleEditSave(todo.id)}
                  >
                    ✓
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={handleEditCancel}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span className="task-text">{todo.text}</span>
                <button
                  className="edit-btn"
                  onClick={() => handleEditStart(todo)}
                >
                  <span className="edit-icon">✎</span>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  <span className="delete-icon">×</span>
                </button>
              </>
            )}
          </div>
          <div className="task-glow"></div>
        </div>
      ))}
    </div>
  )
}

export default TodoTasks
