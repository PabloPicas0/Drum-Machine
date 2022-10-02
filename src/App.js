import React, { useState } from "react";
import "./App.css";

import Drum from "./Components/drum-machine";

function App() {
  return (
    <div className="container-fluid bg-dark">
      <Drum />
    </div>
  );
}
//TODO
//link inputs values like sound etc with drum pads
//add anime sounds render conditionally baset on switch mode
//add red click depended on keyboard click
//add diffrent layout based on picked mode 
export default App;
