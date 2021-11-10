import React, { Component } from 'react';
import './NewStar.scss';
import StarIcon from './StarIcon';

class NewStar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      star: 0,
    };
  }

  changeStarColor = number => {
    this.setState({ star: number });
  };

  render() {
    return (
      <>
        <StarIcon
          value="1"
          currentStar={this.state.star}
          changeStarColor={this.changeStarColor}
          score={1}
        />

        <StarIcon
          value="2"
          currentStar={this.state.star}
          changeStarColor={this.changeStarColor}
          score={2}
        />

        <StarIcon
          value="3"
          currentStar={this.state.star}
          changeStarColor={this.changeStarColor}
          score={3}
        />
        <StarIcon
          value="4"
          currentStar={this.state.star}
          changeStarColor={this.changeStarColor}
          score={4}
        />
        <StarIcon
          value="5"
          currentStar={this.state.star}
          changeStarColor={this.changeStarColor}
          score={5}
        />
      </>
    );
  }
}

export default NewStar;
