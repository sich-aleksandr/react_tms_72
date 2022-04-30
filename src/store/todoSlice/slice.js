import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: 1, label: "Выучить JS", isDone: true },
      { id: 2, label: "Выучить React", isDone: true },
      { id: 3, label: "Выучить Redux", isDone: false },
      { id: 4, label: "Выучить ВСЕ", isDone: false },
    ],
    maxId: 5,
  },
  reducers: {
    deleteTask: (state, action) => {
      return {
        tasks: state.tasks.filter(
          ({ id: taskID }) => taskID !== action.payload
        ),
        maxId: state.maxId,
      };
    },
    addTask: (state, action) => {
      const newItem = {
        id: state.maxId,
        label: action.payload,
        isDone: false,
      };

      state.tasks.push(newItem);
      state.maxId++;
    },
    toggleTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, isDone: !task.isDone };
        }),
      };
    },
  },
});
