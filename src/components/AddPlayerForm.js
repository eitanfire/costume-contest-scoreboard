import React, { useRef, useState } from "react";

function AddPlayerForm({ addPlayer }) {
  const playerInput = useRef();
  const urlInput = useRef(); // Add a ref for the URL input
  const [playerIdCounter, setPlayerIdCounter] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value, urlInput.current.value); // Pass the URL from the input field
    setPlayerIdCounter(playerIdCounter + 1); // Increment the playerIdCounter
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={playerInput} placeholder="Enter name" />
      <input type="url" ref={urlInput} placeholder="Enter URL" />{" "}
      <input type="submit" value="Add Participant" />
    </form>
  );
}

export default AddPlayerForm;
