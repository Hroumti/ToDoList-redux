import TodoForm from './TodoForm'
import TodoFilter from './TodoFilter'
import TodoTasks from './TodoTasks'
import './style.css'

const MedievalTodo = () => {
  return (
    <div className="medieval-app">
      <div className="parchment-background"></div>
      <div className="medieval-container">
        <header className="medieval-header">
          <h1 className="title">
            <span className="title-main">⚔️ ROYAL QUEST SCROLL ⚔️</span>
            <span className="title-sub">~ Keeper of Noble Tasks ~</span>
          </h1>
          <div className="header-line"></div>
        </header>

        <TodoForm />
        <TodoFilter />
        <TodoTasks />
      </div>
    </div>
  )
}

export default MedievalTodo
