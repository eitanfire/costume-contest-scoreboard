import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";

const Header = ({ players, title }) => {
  return (
    <header>
      <img
        className="logo"
        src={require("./assets/Halloween-costume-contest.png")}
        alt="Logo"
      />
      <Stats players={players} />
      {/* <Stopwatch /> */}
      {title}
    </header>
  );
};

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Scoreboard",
};

export default Header;
