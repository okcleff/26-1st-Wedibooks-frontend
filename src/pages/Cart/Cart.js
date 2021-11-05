import React, { Component } from 'react';
import BuyingButton from './BuyingButton/BuyingButton';
import { AiFillCheckCircle } from 'react-icons/ai';
import CartBoxSecondLine from './CartBoxSecondLine/CartBoxSecondLine';
import CartBoxThirdLine from './CartBoxThirdLine/CartBoxThirdLine';

import './Cart.scss';

class Cart extends Component {
  render() {
    return (
      <div>
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
              <div className="cartBoxFifthLine" />
            </div>
            <div className="priceBox">
              <div className="priceDetails">
                <ul className="totalPrice">
                  <li className="totalList">
                    <AiFillCheckCircle className="checkBoxCircle" />
                    총*권을 선택하셨습니다.
                  </li>
                  <li className="priceList">총 상품 금액</li>
                  <li className="priceSum">
                    <div className="purchaseTotalPrice">합계</div>
                  </li>
                </ul>
              </div>
              <BuyingButton title="선택 구매하기" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
