import React, { useState } from "react";
import "../App";

import DrumPad from "./drum-pads";
import Display from "./display";
import audioBank from "./audioBankOne";

const Drum = () => {
  const [pressedText, setPressedText] = useState("Displayer");
  const [volume, setVolume] = useState("0.3");
  //Hooks

  const handleClick = (ref, text) => {
    if (ref.current.paused) {
      ref.current.volume = volume
      ref.current.play();
    } else {
      ref.current.currentTime = 0;
    }

    setPressedText((prevText) => (prevText = text));
  };

  const handleKeyPress = (event, keyCode, audioRef, text) => {
    if (event.keyCode === keyCode) {
      audioRef.current.play();
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume
      setPressedText((prevValue) => (prevValue = text));
    }
  };
  //Handle click methods for drum pad components

  const handleVolume = (event) => {
    setVolume(event.target.value);
  };
  //Handle inputs for Display component

  return (
    <div
      id="drum-machine"
      className="min-vh-100 d-flex justify-content-center align-items-center">
      <div id="display" className="d-flex border border-warning optionBox p-3">
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
                soundVolume={volume}
              />
            );
          })}
        </div>
        <Display
          padText={pressedText}
          volume={volume}
          handleVolume={handleVolume}
        />
      </div>
    </div>
  );
};

export default Drum;
