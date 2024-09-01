import { createSlice } from '@reduxjs/toolkit';
import { addTodo } from './todosOps';

export const todosSlice = createSlice({
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  name: 'todos',
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(addTodo.pending, (state, action) => {
        state.isLoading = true;
        //   state.error =
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const selectTodos = state => state.todos.items;
