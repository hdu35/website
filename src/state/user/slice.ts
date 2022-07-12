import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  userDarkMode: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  userDarkMode: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateUserDarkMode: (state, action: PayloadAction<{ userDarkMode: boolean }>) => {
      state.userDarkMode = action.payload.userDarkMode;
    },
  },
});

// actions
export const { updateUserDarkMode } = userSlice.actions;

// reducer
export default userSlice.reducer;
