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
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
