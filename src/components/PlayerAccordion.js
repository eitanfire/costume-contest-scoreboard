import React, { useState } from "react";
import PropTypes from "prop-types";

function PlayerAccordion({ name, song, score, isHighScore }) {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const toggleVideoVisibility = () => {
    setVideoVisible(!isVideoVisible);
  };

  return (
    <div className="player">
      <div className="player-name">
        {name}
        <button className="show-video" onClick={toggleVideoVisibility}>
          🎸
        </button>
      </div>
      <div className={`video-container ${isVideoVisible ? "visible" : ""}`}>
        <iframe
          width="560"
          height="315"
          src={song}
          frameBorder=".8"
          allowFullScreen
          title={name}
        ></iframe>
      </div>
      <div className={`score ${isHighScore ? "high-score" : ""}`}>{score}</div>
    </div>
  );
}

PlayerAccordion.propTypes = {
  name: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  isHighScore: PropTypes.bool,
};

export default PlayerAccordion;
