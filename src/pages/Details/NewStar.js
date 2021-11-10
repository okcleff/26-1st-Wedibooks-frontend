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
    const { showScore } = this.props;
    const { star } = this.state;
    return (
      <>
        <StarIcon
          value="1"
          changeStarColor={this.changeStarColor}
          currentStar={star}
          score={1}
          showScore={showScore}
        />

        <StarIcon
          value="2"
          changeStarColor={this.changeStarColor}
          currentStar={star}
          score={2}
          showScore={showScore}
        />

        <StarIcon
          value="3"
          changeStarColor={this.changeStarColor}
          currentStar={star}
          score={3}
          showScore={showScore}
        />
        <StarIcon
          value="4"
          changeStarColor={this.changeStarColor}
          currentStar={star}
          score={4}
          showScore={showScore}
        />
        <StarIcon
          value="5"
          changeStarColor={this.changeStarColor}
          currentStar={star}
          score={5}
          showScore={showScore}
        />
      </>
    );
  }
}

export default NewStar;
