import logo from './logo.svg';
import './App.css';
import {theme} from './Theme';
import { ThemeProvider } from '@mui/material/styles';

import { useRef } from 'react';
import React, { useState } from 'react';

import TopBar from './components/TopBar';
import Textbox from './components/Textbox';
import Image from './components/Image';
import Projects from './components/Projects';
import Contact from './components/Contact';

const aboutText = 'Master of Science in Engineering – Computer Science from KTH Royal Institute of Technology. Several years of .NET development experience. Strong foundation in software engineering principles, with a special interest in Data Science and Machine Learning.';
const portfolio = "/images/portfolio.png"; 


function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <TopBar refs={{"Home": homeRef, "About": aboutRef, "Projects": projectsRef, "Contact": contactRef}}/>
      <section ref={homeRef} id="home">
      <Image src={process.env.PUBLIC_URL + portfolio} alt="logo"/>
      </section>
      <section ref={aboutRef} id="About">
      <Textbox text={aboutText}/>
      </section>
      <section ref={projectsRef} id="Projects">
      <Projects/>
      </section>
      <section ref={contactRef} id="Contact">
      <Contact/>
      </section>
      <div style={{height: "200px"}}></div>
    </ThemeProvider>
  );
}

export default App;
