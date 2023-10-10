import React, { Component } from 'react';

class AddPlayerForm extends Component {

  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={this.playerInput}
          placeholder="Enter name"
        />
        {/* <label for="url">Enter an https:// URL:</label> */}
        <input
          // className="songLink"
          type="url"
          ref={this.playerInput}
          placeholder="Walk on Song"
        />
        <input type="submit" value="Add Participant" />
      </form>
    );
  }
}

export default AddPlayerForm;