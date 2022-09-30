import React, { useEffect } from "react";

const DrumPad = (props) => {

  useEffect(() => {
    window.addEventListener("keydown", props.handleKeyPress);
  })

  return (
    <div className="col px-1">
      <div
        className="drum-pad shadowBox rounded-3 bg-warning m-2"
        onClick={() => {
          props.click(props.keyPress, props.id);
        }}>
        <audio
          id={props.keyPress}
          className="clip"
          type="audio/mpeg"
          src={props.url}
        />
        {props.keyPress}
      </div>
    </div>
  );
};

export default DrumPad;
