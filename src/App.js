import React, { useState } from "react";
import "./App.css";

import Drum from "./Components/drum-machine";

function App() {
  const [checked, setChecked] = useState(true);

  const handleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <div className="container-fluid bg-dark">
      <Drum checked={checked} change={handleSwitch}/>
    </div>
  );
}

export default App;
