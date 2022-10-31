import React from 'react';
import PropTypes from "prop-types";
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {

  return (
    <header>
      <img className='logo' src={require('./assets/logo.jpg')} />
      <Stats players={ players } />
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;