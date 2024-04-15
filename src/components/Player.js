import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import { Container, Col } from "reactstrap";

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
  const [manualScore, setManualScore] = useState(score);

  const handleRemovePlayer = () => {
    removePlayer(id);
  };

  const handleScoreClick = () => {
    // Toggle between manual score input and display
    setManualScore((prevScore) => (prevScore === score ? "" : score));
  };

  const handleManualScoreChange = (e) => {
    // Update the manual score in the component's state
    setManualScore(parseInt(e.target.value, 10) || 0);
  };

  const handleScoreBlur = () => {
    // Call the changeScore function to update the score in App state when the input loses focus
    changeScore(index, manualScore);
  };

  return (
    <Container className="player">
      <Col className="player-name col">
        <button className="remove-player" onClick={handleRemovePlayer}>
          ✖
        </button>
        <Icon isHighScore={isHighScore} />
        {name}
      </Col>
      <a
        role="button"
        className="btn"
        href={song}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span role="img" alt="play video">
          🎸
        </span>
      </a>
      <div className="counter" onClick={handleScoreClick}>
        {manualScore !== "" ? (
          <input
            type="number"
            value={manualScore}
            onChange={handleManualScoreChange}
            onBlur={handleScoreBlur}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div>{score}</div>
        )}
      </div>
    </Container>
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
