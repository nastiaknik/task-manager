import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return { payload: { text, id: nanoid(), completed: false } };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
    deleteCompleted(state) {
      for (const task of state) {
        if (task.completed === true) {
          state.splice(state.indexOf(task), 1);
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, deleteCompleted } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
