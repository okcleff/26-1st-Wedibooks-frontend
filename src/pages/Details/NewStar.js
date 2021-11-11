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
        {[1, 2, 3, 4, 5].map((ele, idx) => {
          return (
            <StarIcon
              key={idx}
              value={ele}
              changeStarColor={this.changeStarColor}
              currentStar={star}
              score={ele}
              showScore={showScore}
            />
          );
        })}
      </>
    );
  }
}

export default NewStar;
