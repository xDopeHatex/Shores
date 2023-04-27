import { createSlice, nanoid } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: [],
});

const initialState = [
  createHuman("Ivan"),
  createHuman("Ilya"),
  createHuman("Ioan"),
  createHuman("Hovaness"),
];

export const humanSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tasksSlice.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskIds);
        } else {
          human.taskIds = human.taskIds.filter(
            (id) => id !== action.payload.taskIds
          );
        }
      }
    });
  },
});
