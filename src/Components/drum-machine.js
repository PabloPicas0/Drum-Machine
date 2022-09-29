import React, { useState, useEffect } from "react";
import "../App";

import DrumPad from "./drum-pads";
import Display from "./display";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Drum = () => {

  
  return (
    <div
      id="drum-machine"
      className="min-vh-100 d-flex justify-content-center align-items-center">
      <div
        id="display"
        className="d-flex bg-secondary border border-warning optionBox p-3">
        <div id="firstBox" className="row row-cols-3 mx-0">
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </div>
        <Display />
      </div>
    </div>
  );
};

export default Drum;
