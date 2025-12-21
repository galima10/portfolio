import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clear } from "console";

interface NavigationState {
  step: number;
}

const initialState: NavigationState = {
  step: 0,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    stepUpdated(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    clearNavigationState(state) {
      state.step = 0;
    },
  },
});

export const { stepUpdated, clearNavigationState } = navigationSlice.actions;

export default navigationSlice.reducer;
