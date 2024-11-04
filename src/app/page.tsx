"use client";
import { useState } from "react";

import Header from "./components/header/Header"

export default function Home(){

  const [button, setButton] = useState("Home");

  return(
    <div>
      <Header button={button} setButton={setButton}/>
    </div>
  ) 
}