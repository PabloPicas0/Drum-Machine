import React from "react";
import App from "../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const drum = (props) => {
  return (
    <div
      id="drum-machine"
      className="min-vh-100 d-flex justify-content-center align-items-center">
      <div
        id="display"
        className="d-flex bg-secondary border border-warning p-3">
        <div id="firstBox" className="row row-cols-3 mx-0">
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">Q</div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">W</div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">E</div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">A</div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">S</div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">D</div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">Z</div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">X</div>
          </div>
          <div className="col px-1">
            <div className="drum-pad shadowBox rounded-3 bg-warning m-2">C</div>
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
                onChange={props.change}
                checked={props.checked}
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

export default drum;
