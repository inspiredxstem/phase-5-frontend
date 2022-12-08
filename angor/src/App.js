import "./styles.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/SocketContext";

import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Connection from "./components/Connection";
import ProfileInfo from "./components/ProfileInfo";
//import FriendChat from "./components/FriendChat";
import FriendList from "./components/FriendList";
import Error from "./components/Error";

export default function App() {
  const [userInbox, setUserInbox] = useState([]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        {true ? (
          <>
            <Route exact path="/home" element={<Home />} />
            <Route
              exact
              path="/connection"
              element={
                <ContextProvider>
                  <Connection />
                </ContextProvider>
              }
            />
            <Route exact path="/profileinfo" element={<ProfileInfo />} />
            <Route exact path="/friends" element={<FriendList />} />
          </>
        ) : (
          <Route path="*" element={<Error />} />
        )}
      </Routes>
    </>
  );
}
