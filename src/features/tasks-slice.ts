import { createSlice } from '@reduxjs/toolkit';

export type TasksState = {
  entities: Task[];
};

const initialState: TasksState = {
  entities: [],
};

// Create the slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state: TasksState) => state,
    removeTask: (state: TasksState) => state,
  },
});

tasksSlice.actions.addTask;
