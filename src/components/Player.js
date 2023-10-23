import React from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

const Player = ({
  name,
  id,
  song,
  score,
  index,
  removePlayer,
  changeScore,
  isHighScore,
}) => {
  const handleRemovePlayer = () => {
    removePlayer(id); // Pass the correct ID to removePlayer
  };

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={handleRemovePlayer}>
          ✖
        </button>
        <Icon isHighScore={isHighScore} />
        {name}
      </span>
      <a
        role="button"
        className="btn"
        href={song}
        target="_blank"
        rel="noopener noreferrer"
      >
        🎸
      </a>
      <Counter score={score} index={index} changeScore={changeScore} />
    </div>
  );
};

Player.propTypes = {
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  song: PropTypes.string.isRequired, // Change the prop type to string for the URL
  index: PropTypes.number,
  isHighScore: PropTypes.bool,
};

export default Player;
