/* eslint-disable */
import React, { Component } from 'react';
import { RiHome2Fill, RiShoppingCartFill } from 'react-icons/ri';
import { HiViewList } from 'react-icons/hi';
import { SiZcash } from 'react-icons/si';

import { Link } from 'react-router-dom';
import './Nav.scss';
import '../../styles/variables.scss';

export class LoginNav extends Component {
  render() {
    return (
      <header className="nav">
        <nav className="navTotal">
          <div className="search">
            <Link to="/footer">
              <span id="logoName">WEDIBOOKS</span>
            </Link>
            <input
              className="searchInput"
              type="text"
              placeholder="제목, 저자, 출판사 검색"
            />
            <div>
              <button className="cashButton" type="button">
                캐시충전&nbsp;
                <SiZcash className="cashIcon" />
              </button>
              <button className="myBooksButton" type="button">
                내 서재
              </button>
            </div>
          </div>
          <div className="homeCart">
            <div>
              <Link to="/footer">
                <RiHome2Fill className="homeIcon" />
                <span className="homeText">HOME</span>
              </Link>
            </div>
            <div>
              <Link to="/footer">
                <RiShoppingCartFill className="cartIcon" />
                <span className="cartText">CART</span>
              </Link>
            </div>
          </div>
        </nav>

        <section className="navCategory">
          <Link to="../../Category">
            <HiViewList className="listIcon" />
          </Link>
          <Link to="/footer">
            <span className="novel">소설</span>
          </Link>
          <Link to="/footer">
            <span className="computer">컴퓨터/IT</span>
          </Link>
        </section>
      </header>
    );
  }
}

export default LoginNav;
