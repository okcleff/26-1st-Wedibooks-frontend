import React, { Component } from 'react';

export class showButtons extends Component {
  constructor() {
    super();
    this.state = {
      startIndex: 0,
      endIndex: 5,
    };
  }

  showAfter = () => {
    const { startIndex, endIndex } = this.state;

    this.setState({
      startIndex: startIndex + 5,
      endIndex: endIndex + 5,
    });
  };

  showBefore = () => {
    const { startIndex, endIndex } = this.state;
    this.setState({
      startIndex: startIndex - 5,
      endIndex: endIndex - 5,
    });
  };

  render() {
    const { startIndex, endIndex } = this.state;
    const { showBefore, showAfter } = this;

    return (
      <div>
        <button
          type="button"
          onClick={showBefore}
          className="showBefore"
          disabled={startIndex === 0 ? true : false}
        >
          이전 5개
        </button>
        <button
          type="button"
          onClick={showAfter}
          className="showAfter"
          disabled={endIndex === 20 ? true : false}
        >
          다음 5개
        </button>
      </div>
    );
  }
}

export default showButtons;
