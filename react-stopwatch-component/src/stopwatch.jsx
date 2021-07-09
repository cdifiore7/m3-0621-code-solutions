import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      timeCount: 0,
      interval: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.watchTimer = this.watchTimer.bind(this);
  }

  handleClick() {
    this.watchControl();
    this.setState({
      status: !this.state.status,
      timeCount: this.state.timeCount
    });
  }

  handleReset() {
    if (this.state.status === false) {
      this.setState({
        timeCount: 0
      });
    }
  }

  watchTimer() {
    this.setState({
      timeCount: this.state.timeCount + 1
    });
  }

  watchControl() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
    } else {
      const time = setInterval(this.watchTimer, 1000);
      this.setState({ interval: time });
    }
  }

  clock() {
    if (this.state.status === false) {
      return 'fas fa-play';
    } else {
      return 'fas fa-pause';
    }
  }

  render() {
    const clocktimer = this.clock();
    const timercount = this.state.timeCount;
    return (
    <div className= "clock-container">
      <div className="clock-circle" onClick= {this.handleReset}>
      <div className = "counter">{timercount}</div>
    </div>
    <div className= "timercontrols">
    <div onClick={this.handleClick} className= {clocktimer}></div>
    </div>
    </div>
    );
  }
}
export default StopWatch;
