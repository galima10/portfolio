import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export const { stepUpdated } = navigationSlice.actions;

export default navigationSlice.reducer;