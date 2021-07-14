import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerApp: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ drawerApp: !this.state.drawerApp });
  }

  render() {
    const app = (
    <div>
      <div className="container">
        <h1 onClick={this.handleClick}>Menu</h1>
        <h3 onClick={this.handleClick}>About</h3>
        <h3 onClick={this.handleClick}>Get Started</h3>
        <h3 onClick={this.handleClick}>Sign In</h3>
      </div>
      <div className="mainbody" onClick={this.handleClick}></div>
    </div>
    ); return (
    <div>{this.state.drawerApp ? app : <i className="fas fa-bars" onClick={this.handleClick} />}
    </div>
    );
  }
}
export default AppDrawer;
