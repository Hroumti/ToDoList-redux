import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('futuristic-todos');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  todos: loadFromLocalStorage(),
  filter: 'all' // 'all', 'completed', 'notCompleted'
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('futuristic-todos', JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem('futuristic-todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('futuristic-todos', JSON.stringify(state.todos));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      localStorage.setItem('futuristic-todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
