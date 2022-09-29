import React, { useState } from "react";

const Display = (props) => {
    
  const [checked, setChecked] = useState(true);

  const handleSwitch = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div id="secondBox" className="pb-4 px-4">
      <h1 className="text-center mb-4">Drum Machine</h1>
      <div className="text-center text-light bg-dark optionBox p-1 mb-4">
        <span>{props.padText}</span>
      </div>
      <label htmlFor="rangeLabel" className="d-block text-center form-label">
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
          <label htmlFor="flexSwitchCheckDefault" className="form-check-label">
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
          <label htmlFor="flexSwitchCheckChecked" className="form=check-label">
            Power
          </label>
        </div>
      </div>
    </div>
  );
};

export default Display;
