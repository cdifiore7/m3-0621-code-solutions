/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.autoStepper = this.autoStepper.bind(this);
    this.autoResetter = this.autoResetter.bind(this);
    this.clickLeftArrow = this.clickLeftArrow.bind(this);
    this.clickRightArrow = this.clickRightArrow.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  clickLeftArrow(event) {
    this.setState({
      currentIndex: ((this.state.currentIndex +
      this.props.items.length) - 1) %
       this.props.items.length
    });
    this.autoResetter();
    this.autoStepper();
  }

  clickRightArrow(event) {
    this.setState({
      currentIndex:
      ((this.state.currentIndex + this.props.items.length) + 1) %
      this.props.items.length
    });
    this.autoResetter();
    this.autoStepper();
  }

  clickDot(event) {
    this.setState({
      currentIndex:
      (event.target.tagName === 'li')
        ? parseInt(event.target.id, 10)
        : parseInt(event.target.closest('li').id, 10)
    });
    this.autoResetter();
    this.autoStepper();
  }

  componentDidMount() {
    this.autoStepper();
  }

  autoStepper() {
    this.timer = setInterval(
      () => this.setState({
        currentIndex: ((this.state.currentIndex + this.props.items.length) + 1) %
        this.props.items.length
      }),
      3000
    );
  }

  autoResetter() {
    clearInterval(this.timer);
  }

  render(props) {
    const pokeList = this.props.items.map((element, index) => {
      return (
          <li key={element.index} id={index} onClick={this.dotClick}>
            {(this.state.currentIndex === index)
              ? <i className="fas fa-circle"></i>
              : <i className="far fa-circle"></i>}
          </li>
      );
    });
    return (
        <div className="carousel">
          <div onClick={this.clickLeftArrow} className="left-arrow">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="carousel-body">
            <div className="carousel-image-container">
              <img src={this.props.items[this.state.currentIndex].source}
              alt={this.props.items[this.state.currentIndex].name} />
            </div>
            <ul className='index'>{pokeList}</ul>
          </div>
          <div onClick={this.clickRightArrow} className="right-arrow">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
    );
  }
}
export default Carousel;
