import React, { useState } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import {playerData}  from "../playerData";

function App() {
  const [players, setPlayers] = useState(playerData.players);

  // Player id counter
  const prevPlayerId = 4;

  const getHighScore = () => {
    const scores = players.map((p) => p.score);
    const highScore = Math.max(...scores);

    if (highScore) {
      return highScore;
    }
    return null;
  };

  const handleScoreChange = (index, delta) => {
    setPlayers((prevState) => {
      const updatedPlayers = [...prevState];
      const updatedPlayer = { ...updatedPlayers[index] };
      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;
      return updatedPlayers;
    });
  };

  const handleAddPlayer = (name, song) => {
    setPlayers((prevState) => [
      ...prevState,
      {
        name,
        song,
        score: 0,
        id: prevPlayerId + 1,
      },
    ]);
  };

  const handleRemovePlayer = (id) => {
    setPlayers((prevState) => prevState.filter((p) => p.id !== id));
  };

  const highScore = getHighScore();

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={players} />
      <AddPlayerForm addPlayer={handleAddPlayer} />
      {players
        .sort((a, b) => b.score - a.score)
        .map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            song={player.song}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={handleScoreChange}
            removePlayer={handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        ))}
    </div>
  );
}

export default App;
