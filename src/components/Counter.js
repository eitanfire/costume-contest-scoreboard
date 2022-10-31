import React from 'react';
import PropTypes from 'prop-types';
// import InputScore from './assets/InputScore';

const Counter = ({index, score, changeScore}) => {

  return (
    
    <div className="counter">
      {/* <input type="submit" value="Submit" /> */}
      {/* <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button> */}
     
      <span className="counter-score">{ score }</span>
      {/* <button className="counter-action-tenth increment" onClick={() => changeScore(index, .1)}> + </button> */}
      {/* <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button> */}
      {/* <button className="counter-action-by-ten increment" onClick={() => changeScore(index, 10)}> + </button> */}
    </div>
  );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

export default Counter;