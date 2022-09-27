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
        <div
          id="firstBox"
          className="row row-cols-3 mx-0 text-center">
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
          <div className="col">
            <div className="drum-pad bg-warning m-2">q</div>
          </div>
        </div>

        <div id="secondBox" className="pb-4 px-4">
          <h1 className="text-center mb-4">Drum Machine</h1>
          <div>
            <p>Text sample</p>
          </div>
          <label
            htmlFor="rangeLabel"
            className="d-block text-center form-label">
            Volume
          </label>
          <input
            type="range"
            className="form-range"
            id="rangeLabel"
            value={40}
          />

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
