import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Blob from "./Blob";
import Blueblob from "../images/Blu_Blob_Wak_.gif";
import axios from "axios";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get("https://api.api-ninjas.com/v1/quotes?category=success", {
        headers: { "X-Api-Key": "oC1xZgMjJ3hokJirVXP3IA==A7lS1T6Tm4qQl7su" }
      })
      .then((data) => {
        setQuote(data.data[0].quote);
        setAuthor(data.data[0].author);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="dailyQuote">
          <p className="homeQuote">
            {quote} - {author}
          </p>
        </div>
        <div className="blobContainer">
          <img className="blob" src={Blueblob} alt="something" />
        </div>
      </div>
    </>
  );
}
