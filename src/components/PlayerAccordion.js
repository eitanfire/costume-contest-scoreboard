import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function PlayerAccordion({ id, name, song, score, isHighScore }) {
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (isVideoVisible && player === null) {
      // Load the YouTube API script and create the player when it's ready
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setPlayer(
          new window.YT.Player("player", {
            height: "315",
            width: "560",
            videoId: song, // Assuming `song` contains the video ID
            playerVars: {
              autoplay: 0, // You can set this to 1 for autoplay
            },
          })
        );
      };
    }
  }, [isVideoVisible, song, player]);

  const toggleVideoVisibility = () => {
    setVideoVisible(!isVideoVisible);
  };

  return (
    <div className={`player ${isVideoVisible ? "expanded" : ""}`} key={id}>
      <div className="player-name">
        {name}
        <button className="show-video" onClick={toggleVideoVisibility}>
          <span role="img" aria-label="Play Video">
            🎸
          </span>
        </button>
      </div>
      <div
        id="player"
        className={`video-container ${isVideoVisible ? "visible" : ""}`}
      />
      <div className={`score ${isHighScore ? "high-score" : ""}`}>{score}</div>
    </div>
  );
}

PlayerAccordion.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  isHighScore: PropTypes.bool,
};

export default PlayerAccordion;
