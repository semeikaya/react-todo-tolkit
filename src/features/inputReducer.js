import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { empty: false, classError: "" };

export const inputChange = createAction("change");
export const inputBlur = createAction("blur");

export const inputReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(inputChange, (state) => {
      state.empty = false;
      state.classError = "borderInput";
    })
    .addCase(inputBlur, (state) => {
      state.empty = true;
      state.classError = "is-error";
    });
});
