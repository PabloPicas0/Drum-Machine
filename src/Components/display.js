import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const Display = (props) => {
  const [checked, setChecked] = useState(true);

  const handleSwitch = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div id="secondBox" className="pb-4 px-4">
      <h1 className="text-center mb-4 text-white">Drum Machine</h1>
      <div className="text-center text-light bg-dark optionBox p-1 mb-4">
        <span>{props.padText}</span>
      </div>
      <div>
        <label
          htmlFor="rangeLabel"
          className="d-block text-center form-label fw-bold text-white">
          Volume
        </label>
        <div className="d-flex justify-content-between align-items-center gap-2 text-white">
          <FontAwesomeIcon icon={faVolumeXmark} />
          <input
            type="range"
            className="form-range"
            id="rangeLabel"
            min={0.0}
            max={1}
            step={0.01}
            value={props.volume}
            onChange={(e) => {
              props.handleVolume(e,`Volume ${Math.round(e.target.value * 100)}%`);
            }}
          />
          <FontAwesomeIcon icon={faVolumeHigh} />
        </div>
      </div>

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
            className="form-check-label text-white">
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
            className="form=check-label text-white">
            Power
          </label>
        </div>
      </div>
    </div>
  );
};

export default Display;
