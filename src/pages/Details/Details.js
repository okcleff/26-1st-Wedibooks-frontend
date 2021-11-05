import React, { Component } from 'react';
import BookIntroduction from './BookIntroduction/BookIntroduction';
import BookBorrow from './BookBorrow/BookBorrow';
import StarRating from './StarRating/StarRating';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { RiShoppingCartFill } from 'react-icons/ri';

import './Details.scss';

class Details extends Component {
  render() {
    return (
      <article className="totalBox">
        <div className="BookContainer">
          <div className="imageBox">
            <img
              className="book1"
              alt="book1"
              src="https://cdn.pixabay.com/photo/2015/06/22/08/39/child-817371__340.jpg"
            />
            <BookBorrow title="미리보기" />
          </div>
          <div className="RightBox">
            <ul className="bookExplanation">
              <li className="firstCategory">소설 > 한국소설</li>
              <li className="bookTitle">피에 젖은 땅, 국경. 제1권</li>
              <li className="starRating">
                <StarRating />
              </li>
              <li className="bookAuthor">조혜경 저</li>
              <li className="bookCompany">유페이퍼 출판</li>
            </ul>
            <div className="bookPrice">판매가</div>
            <div className="buttonBox">
              <div className="purchaseButtons">
                <button className="manyButtons" type="button">
                  <BsFillSuitHeartFill className="heartIcon" />
                </button>
                <button className="manyButtons" type="button">
                  <RiShoppingCartFill className="cartIcon" />
                </button>
              </div>
              <BookBorrow title="대여하기" />
              <BookBorrow title="구매하기" />
            </div>
          </div>
        </div>

        <BookIntroduction name="작품소개" />
        <BookIntroduction name="목차" />

        <div className="userReviews">
          <div className="reviewTitle">
            <div className="reviewName">리뷰</div>
            <hr />
            <div className="starBox">
              이 책을 평가해주세요!
              <StarRating />
            </div>
            <div className="reviewBox">
              <div className="leftStars">
                <StarRating />
              </div>
              <input
                className="reviewInput"
                type="text"
                placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
              />
              <BookBorrow title="리뷰작성" />
            </div>
          </div>
        </div>

        <div className="reviewsList">
          <div className="users">구매자</div>
          <hr />
          <div className="lastReviewContainer">
            <ul className="leftlists">
              <li>
                <StarRating />
              </li>
            </ul>
            <ul className="reviewItems">
              <li className="itemDetails">
                <span className="itemText">이곳에 리뷰를 남겨주세요!</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

export default Details;
