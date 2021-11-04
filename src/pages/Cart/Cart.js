import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import CartBoxSecondLine from '../../components/CartBoxSecondLine';
import CartBoxThirdLine from '../../components/CartBoxThirdLine';

import './Cart.scss';

class Cart extends Component {
  render() {
    return (
      <div className="cartContainer">
        <div className="cartName">카트</div>
        <div className="cartBoxContainer">
          <div className="cartBox">
            <div className="cartBoxFirstLine">구매가능</div>
            <hr />
            <CartBoxSecondLine />
            <hr />
            <CartBoxThirdLine />
            <hr />
            <CartBoxThirdLine />
            <hr />
            <CartBoxSecondLine />
            <div className="cartBoxFifthLine" />
          </div>
          <div className="priceBox">
            <div className="priceDetails">
              <ul className="totalPrice">
                <li className="list1">
                  <AiFillCheckCircle className="checkBoxCircle" />
                  총*권을 선택하셨습니다.
                </li>
                <li className="list2">총 상품 금액</li>
                <li className="list3">합계</li>
              </ul>
            </div>
            <button className="deleteButton" type="button">
              {' '}
              선택 구매하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Cart);
