import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';

class App extends Component {
  state = {
    angle: 0,
    draw: false,
    rotationInterval: undefined
  };

  componentDidMount() {
    this.draw();
  }

  draw() {
    requestAnimationFrame(this.reDraw);
  }

  reDraw = (timestamp) => {
    this.setState({ angle: (this.state.angle > 360) ? 1 : this.state.angle + 1 });
    if (this.state.draw) {
      requestAnimationFrame(this.reDraw);
    }
  }

  start = () => {
    this.setState({ draw: true });
    this.draw();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.start}>Spin</button>
        <div style={{ backgroundColor: 'red', height: 100, width: 100, transform: `rotate(${this.state.angle}deg)` }}></div>
      </div>
    );
  }
}

export default App;
