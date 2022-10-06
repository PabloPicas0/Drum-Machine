import React, { useState } from "react";
import "../App.css";

import DrumPad from "./drum-pads";
import Display from "./display";
import audioBank from "./audioBankOne";

const Drum = () => {
  const [pressedText, setPressedText] = useState("Displayer");
  const [volume, setVolume] = useState(0.3);
  const [power, setPower] = useState(true);
  const [mode, setMode] = useState(false);
  //Hooks

  const handleClick = (ref, textToDisplay) => {
    if (ref.current.paused) {
      ref.current.volume = volume;
      ref.current.play();
    } else {
      ref.current.currentTime = 0;
    }

    setPressedText((prevText) => (prevText = textToDisplay));
  };

  const handleKeyPress = (event, keyCode, audioRef, textToDisplay) => {
    if (event.keyCode === keyCode) {
      audioRef.current.play();
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume;
      setPressedText((prevValue) => (prevValue = textToDisplay));
    }
  };
  //Handle click methods for drum pad components

  const handleVolume = (event, textToDisplay) => {
    setVolume(event.target.value);
    setPressedText(textToDisplay);
  };

  const handlePowerSwitch = () => {
    setPower((prev) => !prev);
  };

  const handleMode = () => {
    setMode((prev) => !prev);
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
                power={power}
                mode={mode}
              />
            );
          })}
        </div>
        <Display
          padText={pressedText}
          volume={volume}
          handleVolume={handleVolume}
          power={power}
          handlePowerSwitch={handlePowerSwitch}
          handleMode={handleMode}
        />
      </div>
    </div>
  );
};

export default Drum;
