import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  items: [],
  filters: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addtask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },

      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },

    toggleTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { addtask, deleteTask, toggleTask, setFilter } = taskSlice.actions;

export default taskSlice.reducer;
