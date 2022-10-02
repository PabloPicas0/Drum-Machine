import React, { useEffect, useRef } from "react";

const DrumPad = (props) => {
  const audioInput = useRef(null);
  
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      props.handleKeyPress(e, props.keyCode, audioInput, props.id);
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        props.handleKeyPress(e, props.keyCode, audioInput, props.id);
      });
    };
  }, []);

  return (
    <div className="col px-1">
      <div
        id={props.id}
        className="drum-pad shadowBox rounded-3 bg-warning m-2"
        onClick={() => {
          props.click(props.keyPress, props.id);
        }}>
        <audio
          id={props.keyPress}
          className="clip"
          type="audio/mpeg"
          src={props.url}
          ref={audioInput}
        />
        {props.keyPress}
      </div>
    </div>
  );
};

export default DrumPad;
