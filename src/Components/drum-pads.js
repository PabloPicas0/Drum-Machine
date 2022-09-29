import React from "react";

const DrumPad = (props) => {
  return (
    <div id="firstBox" className="row row-cols-3 mx-0">
      {props.data.map((audioItems) => {
        return (
          <div className="col px-1">
            <div
              className="drum-pad shadowBox rounded-3 bg-warning m-2"
              onClick={() => {
                props.click(audioItems.keyPress, audioItems.id);
              }}
              onKeyPress={props.keyPress}>
              <audio
                id={audioItems.keyPress}
                className="clip"
                type="audio/mpeg"
                src={audioItems.url}
              />
              {audioItems.keyPress}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DrumPad;
