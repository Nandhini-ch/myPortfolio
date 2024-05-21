// src/App.js
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import styled from 'styled-components';


// import Download from './ReusableButtons/Download';


function App() {
  return (
    <AppContainer>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  scroll-behavior: smooth;
`;

export default App;