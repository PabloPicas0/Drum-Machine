import React from "react";
import App from "../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const drum = (props) => {
  return (
    <div
      id="drum-machine"
      className="min-vh-100 d-flex justify-content-center align-items-center">
      <div id="display" className="bg-secondary border border-warning">
        <div>
          <button type="button" className="drum-pad">
            <p>Q</p>
          </button>
          <button type="button" className="drum-pad">
            <p>W</p>
          </button>
          <button type="button" className="drum-pad">
            <p>E</p>
          </button>
          <button type="button" className="drum-pad">
            <p>A</p>
          </button>
          <button type="button" className="drum-pad">
            <p>S</p>
          </button>
          <button type="button" className="drum-pad">
            <p>D</p>
          </button>
          <button type="button" className="drum-pad">
            <p>Z</p>
          </button>
          <button type="button" className="drum-pad">
            <p>X</p>
          </button>
          <button type="button" className="drum-pad">
            <p>C</p>
          </button>
        </div>

        <div>
          <h1>Drum Machine</h1>
          <dvi>
            <p>Text sample</p>
          </dvi>
          <label htmlFor="rangeLabel" className="form-label">
            Volume
          </label>
          <input type="range" className="form-range" id="rangeLabel" />

          <div>
            <div className="form-check form-switch">
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
                checked
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
