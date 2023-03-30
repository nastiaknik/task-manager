import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return { payload: { text, taskId: nanoid(), completed: false } };
});

export const deleteTask = createAction('tasks/deleteTask', taskId => ({
  taskId,
}));

export const toggleCompleted = createAction(
  'tasks/toggleCompleted',
  taskId => ({ taskId })
);

export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  value => ({ value })
);
