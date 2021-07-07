import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ status: !this.state.status });
  }

  offOn() {
    if (this.state.status === false) {
      return 'on';
    } else {
      return 'off';
    }
  }

  buttonText() {
    if (this.state.status === false) {
      return 'on';
    } else {
      return 'off';
    }
  }

  render() {
    const status = this.offOn();
    const text = this.buttonText();
    return (
    <div className="toggle-container">
      <div className={`toggle-slider ${status}`} onClick={this.handleClick}>
        <div className={`toggle-button ${status}-button`}></div>
    </div>
    <div>{text}</div>
    </div>
    );
  }
}

export default ToggleSwitch;
