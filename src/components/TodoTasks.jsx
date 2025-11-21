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

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      handleEditSave(id)
    } else if (e.key === 'Escape') {
      handleEditCancel()
    }
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-text">📜 No Quests Inscribed 📜</div>
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
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, todo.id)}
                onBlur={() => handleEditSave(todo.id)}
                className="task-edit-input"
                autoFocus
              />
            ) : (
              <span className="task-text" onDoubleClick={() => handleEditStart(todo)}>
                {todo.text}
              </span>
            )}

            <div className="task-actions">
              {editingId === todo.id ? (
                <>
                  <button
                    className="save-btn"
                    onClick={() => handleEditSave(todo.id)}
                    title="Sauvegarder"
                  >
                    <span className="save-icon">✓</span>
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={handleEditCancel}
                    title="Annuler"
                  >
                    <span className="cancel-icon">↩</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditStart(todo)}
                    title="Modifier"
                  >
                    <span className="edit-icon">✎</span>
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    title="Supprimer"
                  >
                    <span className="delete-icon">×</span>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="task-glow"></div>
        </div>
      ))}
    </div>
  )
}

export default TodoTasks
