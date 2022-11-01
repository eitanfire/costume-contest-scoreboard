import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
// import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Olivia",
        score: 0,
        id: 1,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/yL75mtNZ6PA' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      },
      {
        name: "Aaron Z",
        score: 0,
        id: 2,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      },
      {
        name: "Andy D",
        score: 14.4,
        id: 3,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/TNi6PJpB3JU' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      },
      {
        name: "Zachary",
        score: 10,
        id: 4,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://www.youtube.com/watch?v=lYYyPm7q5C8' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      },
      {
        name: "Noa",
        score: 12.6,
        id: 5,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://www.youtube.com/watch?v=hgF1HI_kW6s' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      },
      {
        name: "Amber",
        score: 13.24,
        id: 6,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/O0n-9X1MuMQ' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      },
      {
        name: "Jay",
        score: 0,
        id: 7,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      }
      ,
      {
        name: "Malakai",
        score: 12.46,
        id: 8,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/6xUnSVTh8fI' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      }
      ,
      {
        name: "Nicholas",
        score: 13.2,
        id: 9,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/NTa6Xbzfq1U' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      },
      {
        name: "Sam",
        score: 13.5,
        id: 10,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/MfrC8PAQtlg' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      }
      ,
      {
        name: "Brook",
        score: 15.8,
        id: 11,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/CKti7QixnJI' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      }
      ,
      {
        name: "Jeremiah",
        score: 12.4,
        id: 12,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/LOZuxwVk7TU' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      }
      ,
      {
        name: "Jackie",
        score: 0,
        id: 13,
        song:   
          <div className='songLink'>
          <a
          role='button'
          className='btn'
          // Walk on song
          href='https://youtu.be/GI6dOS5ncFc' 
          target="_blank" rel="noopener noreferrer">🎵
        </a>
        </div>
      }
      ,
       {
         name: "Kyla",
         score: 15.2,
        id: 12,
         song:   
           <div className='songLink'>
           <a
           role='button'
           className='btn'
           // Walk on song
           href='' 
           target="_blank" rel="noopener noreferrer">🎵
        </a>
         </div>
       }
      ,
      // {
      //   name: "Draco",
      //   score: 0,
      //   id: 12,
      //   song:   
      //     <div className='songLink'>
      //     <a
      //     role='button'
      //     className='btn'
      //     // Walk on song
      //     href='' 
      //     target="_blank" rel="noopener noreferrer">🎵
      //   </a>
      //   </div>
      // }
    ]
  };

  // player id counter
  prevPlayerId = 4;
  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );

    const highScore = Math.max(...scores);

    if(highScore) {
      return highScore;
    }
    return null;
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players
              .sort((a, b) => b.score - a.score)
        .map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            song={player.song}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}
            // removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}           
          />
        )}
        {/* <AddPlayerForm addPlayer={this.handleAddPlayer} /> */}
      </div>
    );
  }
}

export default App;
