import React, { useState } from "react";
import App from "../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Drum = () => {
  const [checked, setChecked] = useState(true);

  const handleSwitch = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      id="drum-machine"
      className="min-vh-100 d-flex justify-content-center align-items-center">
      <div
        id="display"
        className="d-flex bg-secondary border border-warning optionBox p-3">
        <div id="firstBox" className="row row-cols-3 mx-0">
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="Q"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              />
              Q
            </div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="W"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              />
              W
            </div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="E"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              />
              E
            </div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="A"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              />
              A
            </div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="S"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              />
              S
            </div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="D"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              />
              D
            </div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="Z"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              />
              Z
            </div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="X"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              />
              X
            </div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">
              <audio
                id="C"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              />
              C
            </div>
          </div>
        </div>

        <div id="secondBox" className="pb-4 px-4">
          <h1 className="text-center mb-4">Drum Machine</h1>
          <div className="text-center text-light bg-dark optionBox p-1 mb-4">
            <span>Text sample</span>
          </div>
          <label
            htmlFor="rangeLabel"
            className="d-block text-center form-label">
            Volume
          </label>
          <input type="range" className="form-range" id="rangeLabel" />

          <div className="mt-3 checkForm">
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                htmlFor="flexSwitchCheckDefault"
                className="form-check-label">
                Mode
              </label>
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={handleSwitch}
                checked={checked}
              />
              <label
                htmlFor="flexSwitchCheckChecked"
                className="form=check-label">
                Power
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drum;
