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
//link inputs values like sound etc with drum pads - this is done but need to fix bug when you scroll really fast volme change and play music
//add anime sounds render conditionally baset on switch mode
//add diffrent layout based on picked mode 
export default App;
