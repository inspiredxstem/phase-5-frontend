import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  personalInfo: [],
  loading: false
};

export const personalInfo = createAsyncThunk("myInfo", () => {
  return axios
    .get("http://127.0.0.1:3000/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res) => res.data);
});

export const updateProfilePic = createAsyncThunk("updateProfile", (body) => {
  console.log(body);
  return axios
    .patch(`http://127.0.0.1:3000/users/1`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res) => res.data);
});

const myInfoSlice = createSlice({
  name: "myInfo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateProfilePic.pending, (state) => {
      state.loading = true;
      console.log("Its loading true");
    });
    builder.addCase(updateProfilePic.fulfilled, (state, action) => {
      console.log(action.payload);
      state.personalInfo.profile_pic = action.payload;
      console.log("Its loading sdasb kndsahbkd");
    });
    builder.addCase(personalInfo.pending, (state) => {
      state.loading = true;
      console.log("Its loading true");
    });
    builder.addCase(personalInfo.fulfilled, (state, action) => {
      state.personalInfo = action.payload;
      state.loading = false;
    });
    builder.addCase(personalInfo.rejected, (state, action) => {
      state.loading = false;
      console.log("Its not loading");
    });
  }
});

export default myInfoSlice.reducer;
