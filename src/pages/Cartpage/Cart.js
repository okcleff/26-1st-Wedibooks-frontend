import React, { Component } from 'react';
import BuyingButton from './BuyingButton/BuyingButton';
import { AiFillCheckCircle } from 'react-icons/ai';
// import CartBoxSecondLine from './CartBoxSecondLine/CartBoxSecondLine';
import CartBoxThirdLine from './CartBoxThirdLine/CartBoxThirdLine';
// import CartData from './CartBox/CartBox';
import './Cart.scss';
import DeleteButton from './DeleteButton/DeleteButton';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      bookPrice: 0,
      isAllCheck: true,
      checkout: 4,
    };
  }
  const;
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

  checkBox = isCheck => {
    let { allCheck } = this.state;
    this.setState({
      allCheck: allCheck.checked ? isCheck.checked : allCheck.false,
    });
  };

  // CheckBox = ()=>{
  //   const [checkedList, setCheckedLists]= useState([]);

  //   const onCheckedAll = useCallback((checked)=>{
  //     if(checked){
  //        const checkedListArray =[];
  //        this.state.cartList.forEach((list)=>checkedListArray.push(list));
  //        setCheckedLists(checkedListArray);
  //     }else{
  //       setCheckedLists([]);
  //     }
  //   ,[this.state.cartList]
  //   );

  // };

  // const handleCheck = (allCheck) =>{
  //   const { cartList }=this.state;
  //   allCheck ?
  //   setIsChecked(()=>{
  // if(isChecked.allCheck){
  //   return {allCheck:false};
  // }else{
  //   const checkedObj={};
  //    cartList.map((el)=>{
  //      checkedObj[el.id]=true;
  //    })
  //    return {allCheck:true, ...checkedObj}
  // }
  //   })
  //   :
  //   setIsChecked({
  //     ...isChecked,
  //     allCheck:false,
  //     [cartList.id]: !isChecked[cartList.id],
  //   })
  // };

  render() {
    const { cartList, bookPrice } = this.state;

    return (
      <div className="cartContainer">
        <div className="cartName">카트</div>
        <div className="cartBoxContainer">
          <div className="cartBox">
            <div className="cartBoxFirstLine">구매가능</div>
            {/* <hr />
            <CartBoxSecondLine />
            <hr /> */}
            <div className="cartBoxSecondLine">
              <input type="checkbox" className="cb1" onClick="checkbox(this)" />
              <div className="secondLineText">전체선택</div>
              <DeleteButton title="전체삭제" />
            </div>
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
                  &nbsp; 총*권을 선택하셨습니다.
                </li>
                <li className="priceList">총 상품 금액</li>
                <li className="priceSum">
                  <div className="purchaseTotalPrice">합계</div>
                  <div className="totalBookPrice">{bookPrice}</div>
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
