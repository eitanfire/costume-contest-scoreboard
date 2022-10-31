import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
import "@fontsource/creepster";

class Player extends PureComponent {

 static propTypes = {
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  song: PropTypes.string.isRequired,
  index: PropTypes.number
 }

 render() {
    const {
      name,
      id,
      song,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props
  return (
    <div className="player">
              <span className='songLink'>{song}</span>
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
          <Icon isHighScore={this.props.isHighScore}/>
        {name}
      </span>
      <Counter score={score} index={index} changeScore={changeScore} />
    </div>
  );
}
}


export default Player;