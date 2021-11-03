import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BookIntroduction from '../../components/BookIntroduction';
import PurchaseButton from '../../components/PurchaseButton';
import BookBorrow from '../../components/BookBorrow';

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
            <button className="previousView" type="button">
              미리보기
            </button>
          </div>
          <div className="RightBox">
            <div className="bookExplanation">
              <div className="firstCategory">소설 > 한국소설</div>
              <div className="bookTitle">피에 젖은 땅, 국경. 제1권</div>
              <div className="starRating">별점</div>
              <div className="bookAuthor">조혜경 저</div>
              <div className="bookCompany">유페이퍼 출판</div>
            </div>
            <div className="bookPrice">책가격</div>
            <div className="purchaseButtons">
              <PurchaseButton />
              <PurchaseButton />
              <PurchaseButton />
              <BookBorrow />
              <BookBorrow />
            </div>
          </div>
        </div>

        <BookIntroduction />
        <BookIntroduction />

        <div className="userReviews">
          <div className="reviewTitle">
            리뷰
            <hr />
            <div className="starBox">이 책을 평가해주세요!</div>
            <div className="reviewBox">
              <div className="leftStars">별점</div>
              <input
                className="reviewInput"
                type="text"
                placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
              />
              <button className="itemAdd" type="button">
                리뷰 남기기
              </button>
            </div>
          </div>
        </div>

        <div className="reviewsList">
          구매자
          <hr />
          <div className="lastReviewContainer">
            <div className="leftlists">별점</div>
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

export default withRouter(Details);
