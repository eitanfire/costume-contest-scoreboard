let playerIdCounter = 1; // Initialize the player ID counter

const playerData = {
  players: [
    {
      name: "Olivia",
      score: 0,
      id: playerIdCounter++, // Use the counter to assign unique IDs
      song: "https://youtu.be/yL75mtNZ6PA",
    },
    // ... other players
  ],
};

export { playerData, playerIdCounter };
