/* eslint-disable no-console */
import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  invalidValid() {
    if (this.state.value.length < 8) {
      return 'invalid';
    } else { return 'valid'; }
  }

  passMark() {
    if (this.state.value.length < 8) {
      return 'fas fa-times';
    } else {
      return 'fas fa-check';
    }
  }

  passMessage() {
    if (this.state.value === '') {
      return 'A password is required';
    } else if (this.state.value.length < 8) {
      return 'Your password is too short';
    } else {
      return null;
    }
  }

  render() {
    const textvalue = this.passMessage();
    const color = this.invalidValid();
    const icon = this.passMark();
    return (
    <div>
    <div>Password</div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <i className= {` ${color} ${icon}`}></i>
    </form>
    <div className={color}>{textvalue}</div>
    </div>
    );
  }
}

export default ValidatedInput;
