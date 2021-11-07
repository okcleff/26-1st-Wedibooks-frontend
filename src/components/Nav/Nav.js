/* eslint-disable */
import React, { Component } from 'react';
import { RiHome2Fill, RiShoppingCartFill } from 'react-icons/ri';
import { HiViewList } from 'react-icons/hi';
import './Nav.scss';
import '../../styles/variables.scss';

export class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <nav className="navTotal">
          <div className="search">
            <span id="logoName">WEDIBOOKS</span>
            <input
              className="searchInput"
              type="text"
              placeholder="제목, 저자, 출판사 검색"
            />
            <div>
              <button className="cashButton" type="button">
                회원가입
              </button>
              <button className="myBooksButton" type="button">
                로그인
              </button>
            </div>
          </div>
          <div className="homeCart">
            <div>
              <RiHome2Fill className="homeIcon" />
              <span className="homeText">HOME</span>
            </div>
            <div>
              <RiShoppingCartFill className="cartIcon" />
              <span className="cartText">CART</span>
            </div>
          </div>
        </nav>

        <section className="navCategory">
          <HiViewList className="listIcon" />
          <span className="novel">소설</span>
          <span className="computer">컴퓨터/IT</span>
        </section>
      </header>
    );
  }
}

export default Nav;
