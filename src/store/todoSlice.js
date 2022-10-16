import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.data.push({
        id: state.data.length + 1,
        title: action.payload,
      });
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((value) => value.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.data.map((value) => {
        if (value.id === action.payload.id) {
          value.title = action.payload.title;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
