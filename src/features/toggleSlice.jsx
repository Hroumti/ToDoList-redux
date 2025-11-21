import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('futuristic-todos');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
};

const initialState = loadFromLocalStorage();

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('futuristic-todos', JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem('futuristic-todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const filtered = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('futuristic-todos', JSON.stringify(filtered));
      return filtered;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
