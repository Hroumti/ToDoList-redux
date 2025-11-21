import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const toggleSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleTodo } = toggleSlice.actions;
export default toggleSlice.reducer;
