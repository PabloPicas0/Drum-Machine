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

export default App;
