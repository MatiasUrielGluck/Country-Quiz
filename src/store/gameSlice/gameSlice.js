import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finished: false,
  stage: 1,
  max_stage: 3,
  correctCounter: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addCorrect: (state) => {
      state.correctCounter += 1;
    },
    nextStage: (state) => {
      state.stage += 1;
    },
    finishGame: (state) => {
      state.finished = true;
    },
    resetState: (state) => {
      state.finished = initialState.finished;
      state.stage = initialState.stage;
      state.max_stage = initialState.max_stage;
      state.correctCounter = initialState.correctCounter;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCorrect, nextStage, finishGame, resetState } =
  gameSlice.actions;
