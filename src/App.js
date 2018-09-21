import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';

class App extends Component {
  state = {
    angle: 0,
    spin: false,
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
    if (this.state.spin) {
      requestAnimationFrame(this.reDraw);
    }
  }

  spin = () => {
    this.setState({ spin: !this.state.spin });
    this.draw();
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.spin}>Spin</button>
        </div>
        <div style={{ backgroundColor: 'red', height: 100, width: 100, transform: `rotate(${this.state.angle}deg)` }}></div>
      </div>
    );
  }
}

export default App;
