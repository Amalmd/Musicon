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
  const [Id, setId] = useState("");

  const handleClick = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/searchVideo", {
        convertedText: text,
      });
      console.log(data);
      const link = await data[0].link;

      const id = link && link.split("=");
      setId(() => id[1]);
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Div>
      <Img src={"/musiconLogo.png"} alt="Musicon" />
      <SerchInput handleClick={handleClick} setText={setText} text={text} />
      <h3>{text}</h3>
      <iframe
        width="600"
        height="400"
        className="video"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={Id ? `https://youtube.com/embed/${Id}?autoplay=0` : null}
      ></iframe>
    </Div>
  );
};

export default Home;
