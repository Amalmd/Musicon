import React, { useState } from "react";
import styled from "styled-components";
import SerchInput from "../SerchInput";
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
  return (
    <Div>
      <Img src={"/musiconLogo.png"} alt="Musicon" />
      <SerchInput setText={setText} text={text} />
      <h3>{text}</h3>
    </Div>
  );
};

export default Home;
