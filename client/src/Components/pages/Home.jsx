import React from "react";
import styled from "styled-components";
import SerchInput from "../SerchInput";
const Div = styled.div`
   height: 100vh;
   width: 100%;
   display: grid;
   justify-items: center;
   align-items: center;
`;

const Img = styled.img`
   height: auto;
   width: 80%;
   display: grid;
   justify-items: center;
   align-items: center;
`;

const Home = () => {
   return (
      <Div>
         <Img src={'/musiconLogo.png'} alt="Musicon" />
         <SerchInput />
      </Div>
   );
};

export default Home;
