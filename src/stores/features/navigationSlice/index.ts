import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  currentIDSection: string;
}

const initialState: NavigationState = {
  currentIDSection: "",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCurrentIDSection: (state, action: PayloadAction<string>) => {
      state.currentIDSection = action.payload;
    },
  },
});

export const { setCurrentIDSection } = navigationSlice.actions;
export default navigationSlice.reducer;