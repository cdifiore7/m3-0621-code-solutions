import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      click: this.state.click + 1
    });
  }

  getColor() {
    if (this.state.click >= 3) {
      return 'blue';
    } else if (this.state.click <= 6) {
      return 'lightblue';
    } else if (this.state.click <= 9) {
      return 'red';
    } else if (this.state.click <= 12) {
      return 'orange';
    } else if (this.state.click <= 15) {
      return 'yellow';
    } else if (this.state.click <= 18) {
      return 'white';
    }
  }

  render() {
    const buttoncolor = this.getColor();

    return <button className={buttoncolor} onClick={this.handleClick}>Hot Button</button>;
  }
}
export default HotButton;
