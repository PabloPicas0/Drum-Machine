import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const DrumPad = (props) => {
  const [pressedKey, setPressedKey] = useState(false);
  const audioInput = useRef(null);

  const downHandler = (event) => {
    if (event.keyCode === props.keyCode) {
      setPressedKey(true);
    }
  };

  const upHandler = (event) => {
    if (event.keyCode === props.keyCode) {
      setPressedKey(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      props.handleKeyPress(e, props.keyCode, audioInput, props.id);
      downHandler(e);
    });
    document.addEventListener("keyup", upHandler);

    return () => {
      document.removeEventListener("keydown", (e) => {
        props.handleKeyPress(e, props.keyCode, audioInput, props.id);
        downHandler(e);
      });
      document.removeEventListener("keyup", upHandler);
    };
  }, [props.soundVolume]);

  return (
    <div className="col px-1">
      <div
        id={props.id}
        className={`${
          props.power
            ? `drum-pad rounded-3 m-2 user-select-none ${
                pressedKey ? "activePad" : "shadowBox bg-warning"
              } `
            : "drum-pad-deactive rounded-3 m-2 user-select-none bg-white"
        }`}
        onClick={() => {
          props.click(audioInput, props.id);
        }}>
        <audio
          id={props.keyPress}
          className="clip"
          type="audio/mpeg"
          src={props.url}
          ref={audioInput}
          muted={props.power ? false : true}
        />
        {props.keyPress}
      </div>
    </div>
  );
};

export default DrumPad;
