import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import BookBorrow from '../BookBorrow/BookBorrow';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { RiShoppingCartFill } from 'react-icons/ri';
import './BookContainer.scss';

class BookContainer extends Component {
  constructor() {
    super();
    this.state = {
      likeNumber: 0,
      clickNumber: false,
    };
  }

  changeLikeNumber = () => {
    const { clickNumber, likeNumber } = this.state;
    if (!clickNumber) {
      this.setState({
        likeNumber: likeNumber + 1,
        clickNumber: !clickNumber,
      });
    } else {
      this.setState({
        likeNumber: likeNumber - 1,
        clickNumber: !clickNumber,
      });
    }
  };

  render() {
    const { likeNumber, clickNumber } = this.state;
    const { bookDetail } = this.props;
    const {
      thumbnail_image_url,
      name,
      author,
      category,
      sub_category,
      publisher,
      price,
      average_rate,
    } = bookDetail;
    const number = Math.round(price);
    const priceNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
      <div className="BookContainer">
        <div className="imageBox">
          <img className="book1" alt="book1" src={thumbnail_image_url} />
          <BookBorrow title="미리보기" />
        </div>

        <div className="RightBox">
          <ul className="bookExplanation">
            <li className="firstCategory">
              {category} > {sub_category}
            </li>
            <li className="bookTitle">{name}</li>
            <li className="starRating">
              <StarRating />
              <div className="averageRate">{average_rate}점</div>
            </li>
            <li className="bookAuthor">{author} 저</li>
            <li className="bookCompany">{publisher} 출판</li>
          </ul>
          <div className="bookPrice">판매가: {priceNumber}원</div>
          <div className="likeNumering">좋아요: {likeNumber}</div>
          <div className="buttonBox">
            <div className="purchaseButtons">
              <button
                className="manyButtons"
                type="button"
                onClick={this.changeLikeNumber}
              >
                <BsFillSuitHeartFill className="heartIcon" />
              </button>
              <Link to="/cart">
                <button className="manyButtons" type="button">
                  <RiShoppingCartFill className="cartIcon" />
                </button>
              </Link>
            </div>
            <BookBorrow title="대여하기" />
            <BookBorrow title="구매하기" />
          </div>
        </div>
      </div>
    );
  }
}

export default BookContainer;
