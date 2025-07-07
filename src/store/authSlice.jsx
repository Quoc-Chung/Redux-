import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const USERS = [
  { name: "Alice", password: "123", email: "alice@gmail.com", role: "user" },
  { name: "Bob", password: "123", email: "bob@gmail.com", role: "nhanvien" },
  { name: "Admin", password: "123", email: "admin@gmail.com", role: "admin" },
];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = USERS.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser;
        state.currentUser = userWithoutPassword;
      } else {
        alert("Email hoặc mật khẩu không đúng");
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
