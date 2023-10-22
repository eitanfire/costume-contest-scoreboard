import React from "react";
import PropTypes from "prop-types";

const Counter = ({ index, score, changeScore }) => {
  return (
    <div className="counter">
      <span className="counter-score">{score}</span>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func,
};

export default Counter;
