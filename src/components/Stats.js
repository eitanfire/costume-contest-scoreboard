import React from "react";
import PropTypes from "prop-types";

const Stats = (props) => {
  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce((total, player) => {
    return total + (player.score || 0);
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Participants:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{isNaN(totalPoints) ? 0 : totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number,
    })
  ).isRequired,
};

export default Stats;
