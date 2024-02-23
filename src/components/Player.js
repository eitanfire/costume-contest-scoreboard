import React, { useState } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";
import { Container, Col, Row } from "reactstrap";

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

  const handleManualScoreChange = (e) => {
    // Update the manual score in the component's state
    setManualScore(parseInt(e.target.value, 10));
  };

  const handleUpdateScore = () => {
    // Call the changeScore function to update the score in App state
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
        <span role="img" alt="play video">🎸</span>
      </a>
      <Counter
        className="counter"
        score={score}
        index={index}
        changeScore={changeScore}
      />
      <div>
        {/* Input field for manual score */}
        <input
          type="number"
          value={manualScore}
          onChange={handleManualScoreChange}
        />
        <button onClick={handleUpdateScore}>Update Score</button>
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
