import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../features/todosReducer";
import { inputReducer } from "../features/inputReducer";

export const store = configureStore({
  reducer: { todosReducer, inputReducer },
});
