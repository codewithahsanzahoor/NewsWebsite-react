import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    setUtterance(u);
    setVoice(voices[0]);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voice;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div className="container">
      <button
        className="btn btn-lg"
        style={{
          background: "#322D31",
          color: "white",
          margin: "5px",
          fontSize: "16px",
        }}
        onClick={handlePlay}
      >
        {" "}
        {isPaused ? "Resume" : "Play"}
      </button>
      <button
        className="btn btn-lg"
        style={{
          background: "#322D31",
          color: "white",
          margin: "5px",
          fontSize: "16px",
        }}
        onClick={handlePause}
      >
        Pause
      </button>
      <button
        className="btn btn-lg"
        style={{
          background: "#322D31",
          color: "white",
          margin: "5px",
          fontSize: "16px",
        }}
        onClick={handleStop}
      >
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
