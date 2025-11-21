import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/toggleSlice";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});
