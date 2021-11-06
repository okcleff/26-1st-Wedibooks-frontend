import React, { Component } from 'react';
import BuyingButton from './BuyingButton/BuyingButton';
import { AiFillCheckCircle } from 'react-icons/ai';
import CartBoxSecondLine from './CartBoxSecondLine/CartBoxSecondLine';
import CartBoxThirdLine from './CartBoxThirdLine/CartBoxThirdLine';
import CartData from './CartBox/CartBox';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      url: './data/CartData.json',
    };
  }

  componentDidMount() {
    const { url } = this.state;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data,
        });
      });
  }

  render() {
    const { cartList } = this.state;
    return (
      <div className="cartContainer">
        <div className="cartName">카트</div>
        <div className="cartBoxContainer">
          <div className="cartBox">
            <div className="cartBoxFirstLine">구매가능</div>
            <hr />
            <CartBoxSecondLine />
            <hr />
            {cartList.slice(2, 4).map(el => {
              return <CartBoxThirdLine key={el.id} cartList={el} />;
            })}
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
    );
  }
}
export default Cart;
