import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://637785ab81a568fc2518138f.mockapi.io/api',
});

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (newTodo, thunkAPI) => {
    try {
      const { data } = await api.post('/todos', newTodo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const getAllTodos = createAsyncThunk(
  'todos/getAllTodos',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/todos');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkAPI) => {
    try {
      // const { data } = await api.delete(`/todos/${id}`);
      await api.delete(`/todos/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (updatedTodo, thunkAPI) => {
    try {
      const { data } = await api.put(`/todos/${updatedTodo.id}`, updatedTodo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
