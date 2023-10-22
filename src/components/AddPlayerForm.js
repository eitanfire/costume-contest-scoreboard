import React, { useRef } from "react";

function AddPlayerForm({ addPlayer }) {
  const playerInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value, "");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={playerInput} placeholder="Enter name" />
      <input type="submit" value="Add Participant" />
    </form>
  );
}

export default AddPlayerForm;
