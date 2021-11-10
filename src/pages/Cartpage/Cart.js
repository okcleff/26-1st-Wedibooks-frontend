import React, { Component } from 'react';
import BuyingButton from './BuyingButton/BuyingButton';
import { AiFillCheckCircle } from 'react-icons/ai';
import CartBoxSecondLine from './CartBoxSecondLine/CartBoxSecondLine';
import CartBoxThirdLine from './CartBoxThirdLine/CartBoxThirdLine';
// import CartData from './CartBox/CartBox';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      bookPrice: 0,
      allChecked: false,
    };
  }

  componentDidMount() {
    fetch('./data/CartData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data,
        });
      });
  }
  priceSum = (isCheck, price) => {
    let { bookPrice } = this.state;
    this.setState({
      bookPrice: isCheck ? bookPrice + price : bookPrice - price,
    });
  };

  handleAllChecked = check => {
    //전체선택 체크박스값을 개별에도 다 넣어주기
    const { allChecked } = this.state;
    this.setState = {
      allChecked: !allChecked,
      check: !allChecked,
    };
  };

  render() {
    const { cartList, bookPrice } = this.state;

    return (
      <div className="cartContainer">
        <div className="cartName">카트</div>
        <div className="cartBoxContainer">
          <div className="cartBox">
            <div className="cartBoxFirstLine">구매가능</div>
            <hr />
            <CartBoxSecondLine />
            <hr />
            {cartList.map(el => {
              return (
                <CartBoxThirdLine
                  key={el.id}
                  cartList={el}
                  priceSum={this.priceSum}
                />
              );
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
                  {bookPrice}
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

//1.장바구니 리스트에 있는 책 중 구입할 책을 체크
//2. 체크박스의 input값이 true/false인지 확인
//3. true면 그 책의 price값을 합계칸으로 보낸다
//4. 체크할수록 합계가 더해져 값이 변경(추가)된다.
