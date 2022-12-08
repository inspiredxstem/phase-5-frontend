import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { personalInfo } from "../reducers/myInfoSlice";
import { GiExitDoor } from "react-icons/gi";
import {
  IoChatbubblesOutline,
  IoAccessibilityOutline,
  IoEyeOffSharp,
  IoGameController
} from "react-icons/io5";

export default function Navbar() {
  const effectRan = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.myInfo);

  useEffect(() => {
    console.log("effect ran");

    if (effectRan.current === false) {
      dispatch(personalInfo());

      return () => {
        console.log("unmounted");
        effectRan.current = true;
      };
    }
  }, []);

  console.log(info.personalInfo);
  return (
    <>
      <nav className="appNavbar">
        <ul class="appNavbar-nav">
          <li class="nav-item">
            <div className="nav-link" id="circle">
              <img
                alt="profileBlob"
                id="profileBlob"
                onClick={() => {
                  navigate("/profileinfo");
                }}
                src={info.personalInfo.profile_pic}
                // use for Steven user database
                // "https://cdn.discordapp.com/attachments/458076170295181325/1050275444848599101/ezgif-5-e4d506c77c-unscreen.gif"
              ></img>
            </div>
          </li>
          <li class="nav-item">
            <IoChatbubblesOutline
              onClick={() => {
                navigate("/connection");
              }}
              className="nav-link"
              size={70}
            />
          </li>
          <li class="nav-item">
            <IoAccessibilityOutline
              onClick={() => {
                navigate("/friends");
              }}
              className="nav-link"
              size={70}
            />
          </li>
          <li class="nav-item">
            <a target="_blank" href="https://matias.ma/nsfw/">
              <IoEyeOffSharp className="nav-link" size={70} />
            </a>
          </li>
          <li class="nav-item">
            <IoGameController className="nav-link" size={70} />
          </li>
          <li class="nav-item">
            <GiExitDoor
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              className="nav-link"
              size={70}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
