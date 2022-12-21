import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import SerchInput from "../SerchInput";
import ReactPlayer from "react-player";
import Youtube from "react-youtube";
const Div = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Img = styled.img`
  height: auto;
  width: 80%;
`;

const Home = () => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const handleClick = async () => {
    const { data } = await axios.post("http://localhost:4000/searchVideo", {
      convertedText: text,
    });
    setUrl(() => data[0].link);
    console.log(data);
  };

  return (
    <Div>
      <Img src={"/musiconLogo.png"} alt="Musicon" />
      <SerchInput handleClick={handleClick} setText={setText} text={text} />
      <h3>{text}</h3>
      <ReactPlayer url={url} playing={false} controls volume={1} />
      {/* <Youtube></Youtube> */}
    </Div>
  );
};

export default Home;
