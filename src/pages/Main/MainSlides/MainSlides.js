import React, { Component } from 'react';
import BooksInSlide from './BooksInSlide';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './MainSlides.scss';

export class MainSlides extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [],
      startIndex: 0,
      endIndex: 5,
    };
  }

  componentDidMount() {
    const { listUrl } = this.props;
    fetch(listUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookList: data.products,
        });
      });
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
    const { slideTitle, misc, isIssue } = this.props;
    const { startIndex, endIndex, bookList } = this.state;
    const { showBefore, showAfter } = this;

    return (
      <div className="mainSlides">
        <h1 className="slideTitle">{slideTitle}</h1>
        <button
          type="button"
          onClick={showBefore}
          className="beforeButton"
          disabled={startIndex === 0 ? true : false}
        >
          <AiOutlineDoubleLeft size="24" />
        </button>

        <div className="slideList">
          {bookList.slice(startIndex, endIndex).map(bookList => {
            return (
              <BooksInSlide
                key={bookList.name}
                bookList={bookList}
                misc={misc}
                isIssue={isIssue}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={showAfter}
          className="afterButton"
          disabled={endIndex === 20 ? true : false}
        >
          <AiOutlineDoubleRight size="24" />
        </button>
      </div>
    );
  }
}

export default MainSlides;
