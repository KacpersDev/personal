"use client";
import { useState } from "react";

import Header from "./components/header/Header"
import Body from "./components/body/Body";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function Home(){

  const [button, setButton] = useState("Home");

  return(
    <div>
      <Header button={button} setButton={setButton}/>
      <Body/>
      <Projects/>
      <Footer/>
    </div>
  ) 
}