import React from "react";

const DrumPad = () => {
    
    const handleClick = (e) => {
      const audio = e.target.children[0];
      audio.currentTime = 0;
      audio.play();
      console.log(audio.id);
    };

  return (
    <div className="col px-1">
      <div
        className="drum-pad shadowBox rounded-3 bg-warning m-2">
        <audio
          id="Q"
          className="clip"
          type="audio/mpeg"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
        Q
      </div>
    </div>
  );
};

export default DrumPad;
