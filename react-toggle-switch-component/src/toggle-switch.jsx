import React from 'react';
import { render } from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
}

handleClick() {
  this.setState({ toggleOn: !this.state.toggleOn });
};

offOn() {
  if (this.state.toggleOn) {
    return 'on'
  } else { return 'off';
}
}

render() {
  const offOn = this.offOn();
  const uppercase = offOn.uppercase();
  return (
    <div className="toggle-container">
      <div className={`toggleslider ${status}` onClick={this.handleClick}}>
        <div className={`toggle-button ${status}-button`}></div>
    </div>
    <div>{word}</div>
    </div>
  )
}
}

export default ToggleSwitch;
