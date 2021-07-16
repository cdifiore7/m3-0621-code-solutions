import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickId: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.clickId === id) {
      this.setState({ clickId: '' });
    } else {
      this.setState({ clickId: id });
    }
  }

  render() {
    const handleClick = this.handleClick;
    return (
      <div>
        {this.props.topics.map(topic => {
          return (
            <div key={topic.id}>
              <button className="accordion" onClick={() => handleClick(topic.id)}>
                {topic.title}
              </button>
              <div className="content" hidden={this.state.clickId !== topic.id}>
                <p>{topic.content}</p>
                </div>
              </div>
          );
        }
        )
        }
        </div>
    );
  }
}
export default Accordion;
