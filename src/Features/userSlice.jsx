import { createSlice } from "@reduxjs/toolkit";

console.log("Enter is userslice");

const userSlice = createSlice({
  name: "User",
  initialState: {
    name: "",
    email: "",
    password: "",
    user: [],
  },
  reducers: {
    addUser(state, action) {
      console.log("Enter in addUser reducer");
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        user: [...state.user, action.payload],
      };
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state) => {
  return state.user;
};
