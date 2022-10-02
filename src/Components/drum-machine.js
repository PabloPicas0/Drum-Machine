import React, { useState } from "react";
import "../App";

import DrumPad from "./drum-pads";
import Display from "./display";
import audioBank from "./audioBankOne";

const Drum = () => {
  const [pressedText, setPressedText] = useState("Displayer");
  //Hooks

  const handleClick = (id, text) => {
    const audio = document.getElementById(id);

    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
    setPressedText((prevText) => (prevText = text));
  };

  const handleKeyPress = (event, keyCode, audioRef, text) => {
    if (event.keyCode === keyCode) {
      audioRef.current.play();
      audioRef.current.currentTime = 0;
      setPressedText((prevValue) => (prevValue = text));
    }
  };
  //Handle click methods

  return (
    <div
      id="drum-machine"
      className="min-vh-100 d-flex justify-content-center align-items-center">
      <div
        id="display"
        className="d-flex border border-warning optionBox p-3">
        <div id="firstBox" className="row row-cols-3 mx-0">
          {audioBank.map((element, index) => {
            return (
              <DrumPad
                key={index}
                url={element.url}
                id={element.id}
                keyPress={element.keyPress}
                keyCode={element.keyCode}
                click={handleClick}
                handleKeyPress={handleKeyPress}
              />
            );
          })}
        </div>
        <Display padText={pressedText} />
      </div>
    </div>
  );
};

export default Drum;
