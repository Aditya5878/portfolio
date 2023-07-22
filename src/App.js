import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import Header from './files/Header/Header';
import './App.css';
import Navbar from './files/Navbar/Navbar';
import About from './files/About/About';
import Projects from './files/Projects/Projects';
import Skills from './files/Skills/Skills';
import ContactForm from './files/ContactForm/ContactForm';
import Footer from './files/footer/Footer';
// import Particles from 'react-particles-js';  


function App() {
  return (
    <>
     <Navbar />
      <Header />
      <About/>
      <Projects />
      <Skills/>
      <ContactForm/>
      <Footer/>
    
    </>
  
  );
}

export default App;
