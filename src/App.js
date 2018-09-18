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
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className={classnames({
          "ruletta": true,
          "ruletta-fast": this.state.speed == 1,
          "ruletta-2": this.state.speed == 2,
          "ruletta-3": this.state.speed == 3,
          "ruletta-4": this.state.speed == 4,
          "ruletta-5": this.state.speed == 5,
        })}></div>
      </div>
    );
  }
}

export default App;
