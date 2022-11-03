import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { todos: [] };

export const addTodo = createAction("add_todo");
export const removesTodo = createAction("remove_todo");
export const completeTodo = createAction("complete_todo");

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.push({ text: action.payload, favorite: false });
      console.log(state.todos);
    })
    .addCase(removesTodo, (state, action) => {
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    })
    .addCase(completeTodo, (state, action) => {
      state.todos = state.todos.map((todo, index) => {
        if (action.payload === index) {
          return { ...todo, favorite: !todo.favorite };
        }
        return todo;
      });
    });
});
