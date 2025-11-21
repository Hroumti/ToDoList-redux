import TodoForm from './TodoForm'
import TodoTasks from './TodoTasks'
import './style.css'

const FuturisticTodo = () => {
  return (
    <div className="futuristic-app">
      <div className="grid-background"></div>
      <div className="futuristic-container">
        <header className="futuristic-header">
          <h1 className="title">
            <span className="title-main">MISSION CONTROL</span>
            <span className="title-sub">Task Management System v2.0</span>
          </h1>
          <div className="header-line"></div>
        </header>

        <TodoForm />
        <TodoTasks />
      </div>
    </div>
  )
}

export default FuturisticTodo
