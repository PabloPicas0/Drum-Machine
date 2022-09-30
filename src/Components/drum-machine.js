import React, { useState, useEffect } from "react";
import "../App";

import DrumPad from "./drum-pads";
import Display from "./display";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const audioBank = [
  {
    keyCode: 81,
    keyPress: "Q",
    id: "Heater 1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyPress: "W",
    id: "Heater 2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyPress: "E",
    id: "Heater 3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyPress: "A",
    id: "Heater 4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyPress: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyPress: "D",
    id: "Open HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyPress: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyPress: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyPress: "C",
    id: "Closed HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const Drum = () => {
  const [pressedText, setPressedText] = useState("Displayer");

  const handleClick = (id, text) => {
    const audio = document.getElementById(id);

    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }

    setPressedText(text);
  };

  //TODO
  // figure out how to target spcific elements to make them play 
  const handleKeyPress = (event) => {
    const audio = document.querySelector(".clip") // target audio element do not add this class on not audio elements

    if(event.keyCode === 67 || event.keyCode === 88 || event.keyCode === 90) {
      audio.play()
      audio.currentTime = 0
    };
  };

  return (
    <div
      id="drum-machine"
      className="min-vh-100 d-flex justify-content-center align-items-center">
      <div
        id="display"
        className="d-flex bg-secondary border border-warning optionBox p-3">
        <div id="firstBox" className="row row-cols-3 mx-0">
          {audioBank.map((element) => {
            return (
              <DrumPad
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
