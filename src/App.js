import React, { Component } from 'react';

class App extends Component {
  state = {
    angle: 0,
    speed: 1,
    spin: false,
    rotationInterval: undefined
  };

  getTime() {
    return Math.floor((Math.random() * 5000) + 1);
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    requestAnimationFrame(this.reDraw);
  }

  reDraw = (timestamp) => {
    this.setState({ angle: (this.state.angle > 360) ? this.state.speed : this.state.angle + this.state.speed });
    if (this.state.spin) {
      requestAnimationFrame(this.reDraw);
    }
  }

  spin = () => {
    this.setState({ spin: true });
    const totalTime = this.getTime();
    console.log('Spin', totalTime);
    setTimeout(() => {
      this.setState({ spin: false });
    }, totalTime);
    this.draw();
  }

  speedUp = () => {
    this.setState({ speed: this.state.speed + 5 });
  }

  slowDown = () => {
    this.setState({ speed: this.state.speed - 5 < 1 ? 1 : this.state.speed - 5 });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', width: 200, marginBottom: 10 }}>
            <button onClick={this.spin}>{this.state.spin ? 'Stop' : 'Spin'}</button>
            <button onClick={this.speedUp}>Speed Up</button>
            <button onClick={this.slowDown}>Slow Down</button>
          </div>
          <div style={{ textAlign: 'center' }}>
            Speed: {this.state.speed} | Angle: {this.state.angle}
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 25 }}>
          <div style={{  backgroundImage: 'url(images/arrow.png)', backgroundSize: 'cover', height: 100, width: 100, transform: `rotate(${this.state.angle}deg)` }}></div>
        </div>
      </div>
    );
  }
}

export default App;
