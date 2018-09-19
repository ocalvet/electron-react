import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';

class App extends Component {
  state = {
    speed: 0
  };

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ speed: this.state.speed + 1 });
    }, 3000)
  }

  draw = () => {
    console.log('canvas', this.canvas);
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.draw}>Draw</button>
        <canvas ref={this.canvas} width="500" height="500" />
      </div>
    );
  }
}

export default App;
