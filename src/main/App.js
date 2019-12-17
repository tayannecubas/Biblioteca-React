import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Routes from './Routes'
import Cabecalho from "./Cabecalho";
import Home from "../view/home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Corpo>
         <Cabecalho/>
         <Home /> 
        </Corpo>
    </BrowserRouter>
  );
}

const Corpo = styled.body`
  width: 100vw;
  height: 100vh;
  background: black;
`;
