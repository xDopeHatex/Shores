import { createSlice, nanoid } from "@reduxjs/toolkit";

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
});
