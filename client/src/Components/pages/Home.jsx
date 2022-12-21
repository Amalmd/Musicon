import React from "react";
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

   return (
      <Div>
         <Img src={"/musiconLogo.png"} alt="Musicon" />
         <SerchInput />
      </Div>
   );
};

export default Home;
