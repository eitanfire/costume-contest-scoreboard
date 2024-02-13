import React, { useState, useEffect } from "react";
import Header from "./Header";
import Player from "./Player";
import PlayerAccordion from "./PlayerAccordion";
import AddPlayerForm from "./AddPlayerForm";
import { playerData } from "../playerData";

function App() {
  // Step 1: Load player data from local storage
  const [players, setPlayers] = useState(() => {
    const storedPlayers = localStorage.getItem("players");
    return storedPlayers ? JSON.parse(storedPlayers) : playerData.players;
  });

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

  // Step 2: Save player data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

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
            key={player.id ? player.id.toString() : index}
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
