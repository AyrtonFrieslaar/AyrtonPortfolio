import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import './assets/scss/johndoe.scss'
import './assets/css/johndoe.css'
import './assets/vendors/themify-icons/css/themify-icons.css'

export default function App() {
  return (
    <main className="">
      <Banner />
      <Navbar />      
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
