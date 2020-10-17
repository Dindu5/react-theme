import React from "react";
import Navbar from "./components/Navbar";
import ThemeSwitcher from './components/ThemeSwitcher'
import styled from 'styled-components'
import ListContents from "./components/ListContents";

const AppWrapper = styled.div `
margin: 0;
padding: .5rem;
box-sizing : border-box;

`
function App() {
  return (
    <AppWrapper>
      <ThemeSwitcher />
      <Navbar />
      <ListContents />
    </AppWrapper>
  );
}

export default App;
