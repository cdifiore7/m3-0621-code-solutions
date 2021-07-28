import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Index: 0};
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.resetterClick = this.resetterClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  };
  handleDotClick(event) {
    this.setState({
      Index: (event.target.tagname === 'li')
      ? parseInt(event.target.id, 10)
      : parseInt(event.target.closest('li').id, 10)
    })
    this.resetterClick();
    this.componentDidMount();
  }
  componentDidMount(event) {
    this.timer = setInterval(() => this.handleClickRight(), 3000);
  };
  handleClickRight(event) {
    this.setState({ Index : ((this.state.Index + this.props.length))}) +w
  }
