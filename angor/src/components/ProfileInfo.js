import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { personalInfo, updateProfilePic } from "../reducers/myInfoSlice";
import Navbar from "./Navbar";
import SleepyBlob from "../images/Blu_Blob_Do.gif";

export default function ProfileInfo() {
  const [hide, setHide] = useState(false);
  const effectRan = useRef(false);
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

  return (
    <>
      <Navbar />
      <div className="infoContainer">
        <div className="infoBox">
          <div className="profilePicContainer">
            <img
              src={info.personalInfo.profile_pic}
              alt="prof_pic"
              className="profilePic"
            />
            <h2>
              Steven Rosario
              <br />
              <>Newbie</>
            </h2>
            <div className="editClose">
              <button
                onClick={() => {
                  setHide(!hide);
                }}
              >
                Edit
              </button>
              /
              <button
                className="delete"
                onClick={() => {
                  console.log("Hello");
                }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="inputProfileContainer">
            <h2 className="infoTitle">Information</h2>

            <div className="inputProfileInfo">
              {/* style={{ display: hide }} */}
              {hide ? (
                <>
                  <form>
                    <label>Username</label>
                    <input className="inputProfile" type="text"></input>
                    <label>Age</label>
                    <input className="inputProfile" type="text"></input>
                    <label>Gender</label>
                    <input className="inputProfile" type="text"></input>
                    <label>Hobbies</label>
                    <input className="inputProfile" type="text"></input>
                    <label>Bio</label>
                    <input className="inputProfile" type="text"></input>
                  </form>
                  <button>Continue</button>
                </>
              ) : (
                <>
                  <div className="myProfileInfo">
                    <h2>Name:{info.personalInfo.name}</h2>
                    <br />
                    <h2>Username:{info.personalInfo.username}</h2>
                    <br />
                    <h3>Age: {info.personalInfo.age}</h3>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="chooseBlobs">
            <div className="chooseBlobsBox">
              <h2>Choose your blob :)</h2>
              <img
                alt="singleBlob"
                className="selectBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/989666072934375435/1049919015952326716/IMG_0179.png"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/989666072934375435/1049919015952326716/IMG_0179.png"
              />
              <img
                alt="singleBlob"
                className="selectBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/458076170295181325/1050241468398309436/IMG_0174-removebg-preview.png"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/458076170295181325/1050241468398309436/IMG_0174-removebg-preview.png"
              />
              <img
                alt="singleBlob"
                className="selectBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/458076170295181325/1050243348247621643/Blu_blob_1.png"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/458076170295181325/1050243348247621643/Blu_blob_1.png"
              />
              <img
                alt="singleBlob"
                className="selectBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/458076170295181325/1050245236133199922/output-onlinegiftools.gif"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/458076170295181325/1050245236133199922/output-onlinegiftools.gif"
              />
              <img
                alt="singleBlob"
                className="selectBlob"
                id="smallSingleBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/458076170295181325/1050245792801247292/IMG_0172-removebg-preview_1.png"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/458076170295181325/1050245792801247292/IMG_0172-removebg-preview_1.png"
              />
              <img
                alt="singleBlob"
                className="selectBlob"
                id="smallSingleBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/989666072934375435/1049902214589714532/IMG_0177.gif"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/989666072934375435/1049902214589714532/IMG_0177.gif"
              />
              <img
                alt="singleBlob"
                className="selectBlob"
                id="smallSingleBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/989666072934375435/1047961047484612718/Blu_Blob_Do_Blu.gif"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/989666072934375435/1047961047484612718/Blu_Blob_Do_Blu.gif"
              />
              <img
                alt="singleBlob"
                className="selectBlob"
                id="smallSingleBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/989666072934375435/1047926627084021790/Pick_Up_Blu_Blob.png"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/989666072934375435/1047926627084021790/Pick_Up_Blu_Blob.png"
              />
              <img
                alt="singleBlob"
                className="selectBlob"
                id="smallSingleBlob"
                onClick={() => {
                  dispatch(
                    updateProfilePic({
                      profile_pic:
                        "https://cdn.discordapp.com/attachments/989666072934375435/1049902041117511690/IMG_0173.gif"
                    })
                  );
                }}
                src="https://cdn.discordapp.com/attachments/989666072934375435/1049902041117511690/IMG_0173.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
