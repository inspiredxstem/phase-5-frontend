import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  friendsList,
  removeFromFriendList,
  removeFriend
} from "../reducers/friendlistSlice";
import { personalInfo } from "../reducers/myInfoSlice";

import { TiUserDelete } from "react-icons/ti";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import store from "../store";
import axios from "axios";
import Navbar from "./Navbar";

export default function FriendList() {
  const navigate = useNavigate();
  const effectRan = useRef(false);

  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friendList);
  const info = useSelector((state) => state.myInfo);

  useEffect(() => {
    console.log("effect ran");

    if (effectRan.current === false) {
      dispatch(friendsList());
      dispatch(personalInfo());

      return () => {
        console.log("unmounted");
        effectRan.current = true;
      };
    }
  }, []);

  console.log(info);
  return (
    <>
      <Navbar />
      <div className="friendsListContainer">
        <div className="friendsList">
          <h2 className="friendsTitle">My Friends:</h2>
          {friends.map((friend, id) => {
            return (
              <div key={id} className="individualFriend">
                <div className="profileCircle">
                  <img
                    alt="friendProfilePic"
                    className="friendProfilePic"
                    src={friend.profile_pic}
                  />
                </div>
                <p className="friendName">{friend.username}</p>
                <div className="friendOptions">
                  <BsFillChatLeftDotsFill size={30} />
                  <TiUserDelete
                    size={30}
                    onClick={() => {
                      dispatch(removeFriend(friend.id));
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
