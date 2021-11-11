import React, { Component } from 'react';

export class StarIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScore: 0,
    };
  }

  touched = () => {
    this.props.changeStarColor(this.props.value);
  };

  render() {
    const showScore = this.state;
    const starProps = this.props;
    const isRed = starProps.currentStar >= starProps.value;
    return (
      <span
        className={`StarIcon ${isRed ? `activate` : null}`}
        onClick={this.touched}
      >
        ★
      </span>
    );
  }
}

export default StarIcon;
