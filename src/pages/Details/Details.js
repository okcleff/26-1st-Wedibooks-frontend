import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BookIntroduction from '../../components/BookIntroduction';
import PurchaseButton from '../../components/PurchaseButton';
import BookBorrow from '../../components/BookBorrow';
import StarRating from '../../components/StarRating';

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
              <div className="starRating">
                <StarRating />
              </div>
              <div className="bookAuthor">조혜경 저</div>
              <div className="bookCompany">유페이퍼 출판</div>
            </div>
            <div className="bookPrice">판매가</div>
            <div className="purchaseButtons">
              <PurchaseButton />
              <PurchaseButton />
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
              <button className="itemAdd" type="button">
                리뷰 작성
              </button>
            </div>
          </div>
        </div>

        <div className="reviewsList">
          <div className="users">구매자</div>
          <hr />
          <div className="lastReviewContainer">
            <div className="leftlists">
              <StarRating />
            </div>
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
