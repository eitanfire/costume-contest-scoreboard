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
  return (
    <div className="player">
      <span className="songLink" song="song">
        {song}
      </span>
      <span className="player-name">
        <Icon isHighScore={isHighScore} />
        {name}
      </span>
      <Counter score={score} index={index} changeScore={changeScore} />
    </div>
  );
};

Player.propTypes = {
  changeScore: PropTypes.func,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  song: PropTypes.object.isRequired,
  index: PropTypes.number,
  isHighScore: PropTypes.bool,
};

export default Player;
