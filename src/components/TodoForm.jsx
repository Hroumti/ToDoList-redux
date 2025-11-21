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
    <form onSubmit={handleSubmit} className="futuristic-form">
      <div className="input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter mission objective..."
          className="futuristic-input"
        />
        <div className="input-glow"></div>
      </div>
      <button type="submit" className="futuristic-btn">
        <span className="btn-text">DEPLOY</span>
        <div className="btn-glow"></div>
      </button>
    </form>
  )
}

export default TodoForm
