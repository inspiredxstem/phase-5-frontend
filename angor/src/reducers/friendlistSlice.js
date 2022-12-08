import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  friends: [],
  loading: false
};

export const friendsList = createAsyncThunk("friendList", () => {
  return axios
    .get("http://127.0.0.1:3000/friendships", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res) => res.data);
});

export const removeFromFriendList = createAsyncThunk(
  "removeFriend",
  ({ body }, id) => {
    console.log(body);
    return axios.delete(
      `http://127.0.0.1:3000/friendships/${body.friend_id}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }
);

const friendlistSlice = createSlice({
  name: "friendList",
  initialState,
  reducers: {
    removeFriend: (state, action) => {
      console.log(action.payload);
      const friendId = action.payload;
      state.friends = state.friends.filter((friend) => {
        return friend.id !== friendId;
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(removeFromFriendList.pending, (state) => {
      state.loading = true;
      console.log("Loading is true");
    });
    builder.addCase(removeFromFriendList.fulfilled, (state, action) => {
      state.loading = true;
      console.log("Loading is true");
    });
    builder.addCase(friendsList.pending, (state) => {
      state.loading = true;
      console.log("Its loading true");
    });
    builder.addCase(friendsList.fulfilled, (state, action) => {
      state.friends = action.payload;
      state.loading = false;
    });
    builder.addCase(friendsList.rejected, (state, action) => {
      state.loading = false;
      console.log("Its not loading");
    });
  }
});

export const { removeFriend } = friendlistSlice.actions;
export default friendlistSlice.reducer;
