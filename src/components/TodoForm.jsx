import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/toggleSlice'
import './style.css'

const TodoForm = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTodo(input.trim()))
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="medieval-form">
      <div className="input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Inscribe thy quest here..."
          className="medieval-input"
        />
      </div>
      <button type="submit" className="medieval-btn">
        <span className="btn-text">⚔️ Decree</span>
      </button>
    </form>
  )
}

export default TodoForm
