import React, { Component } from 'react';
import './SimpleClickHandler.css';

class SimpleClickHandler extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState((state) => {
      return {count: state.count + 1}
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Spyros Click Handler 1</h2>
        </div>
        <button onClick={this.handleClick}>You clicked the button {this.state.count} times</button>
      </div>
    );
  }
}

export default SimpleClickHandler;
