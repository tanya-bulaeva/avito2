import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  email: null,
  city: null,
  avatar: null,
  sells_from: null,
  phone: null,
  role: null,
  surname: null,

};



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.city = action.payload.city;
      state.avatar = action.payload.avatar;
      state.sells_from = action.payload.sells_from;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
      state.password = action.payload.password;
      state.passwordUser = action.payload.passwordUser;
      state.password1 = action.payload.password1;
      state.surname = action.payload.surname;
      localStorage.setItem("id", state.id); 
      localStorage.setItem("name", state.name);
      localStorage.setItem("email", state.email);
      localStorage.setItem("city", state.city);
      localStorage.setItem("avatar", state.avatar);
      localStorage.setItem("sells_from", state.sells_from);
      localStorage.setItem("phone", state.phone);
      localStorage.setItem("role", state.role);
      localStorage.setItem("surname", state.surname);
    },
    removeUser(state) {
      state.id = null;
      state.name = null;
      state.email = null;
      state.city = null;
      state.avatar = null;
      state.sells_from = null;
      state.phone = null;
      state.role = null;
      state.surname = null;
      state.surname = null,
      state.token = null;
      state.password1 = null;
      localStorage.removeItem("id", state.id); 
      localStorage.removeItem("name", state.name);
      localStorage.removeItem("email", state.email);
      localStorage.removeItem("city", state.city);
      localStorage.removeItem("avatar", state.avatar);
      localStorage.removeItem("sells_from", state.sells_from);
      localStorage.removeItem("phone", state.phone);
      localStorage.removeItem("role", state.role);
      localStorage.removeItem("surname", state.surname);
      


    },

  },
});

export const { setUser, removeUser} =
  userSlice.actions;
export default userSlice.reducer;
