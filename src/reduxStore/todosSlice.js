import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, getAllTodos, updateTodo } from './todosOps';

export const todosSlice = createSlice({
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentTodo: null,
  },
  name: 'todos',
  reducers: {
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(addTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllTodos.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateTodo.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id,
        );
        state.items.splice(index, 1, action.payload);
        state.currentTodo = null;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const selectTodos = state => state.todos.items;
export const selectCurrentTodo = state => state.todos.currentTodo;

export const { setCurrentTodo } = todosSlice.actions;
