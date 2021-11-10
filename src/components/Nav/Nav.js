/* eslint-disable */
import React, { Component } from 'react';
import NavList from './NavList';
import { RiHome2Fill, RiShoppingCartFill } from 'react-icons/ri';
import { HiViewList } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Nav.scss';
import '../../styles/variables.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      sub: 'listHidden',

      dropList: [],
    };
  }

  componentDidMount() {
    fetch('./data/dropDownList.json')
      .then(res => res.json())
      .then(list => {
        this.setState({
          dropList: list,
        });
      });
  }

  dropDown = () => {
    const { sub } = this.state;
    this.setState({
      sub: sub === 'listHidden' ? 'listOpen' : 'listHidden',
    });
  };

  render() {
    const { sub, dropList } = this.state;
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
                회원가입
              </button>
              <button className="myBooksButton" type="button">
                로그인
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
          <HiViewList className="listIcon" onClick={this.dropDown} />

          <span className="novel" onClick={this.dropDown}>
            소설
          </span>

          <span className="computer" onClick={this.dropDown}>
            컴퓨터/IT
          </span>
        </section>

        <div className="navDropList">
          <div className="novelDropList">
            <section className={sub}>
              <ul className="subUl">
                {dropList.slice(1, 9).map(el => {
                  return (
                    <li className="subLi" key={el.id}>
                      {el.novelList}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className="itDropList">
            <section className={sub}>
              <ul className="subUl">
                {dropList.slice(10, 15).map(el => {
                  return (
                    <li className="subLi" key={el.id}>
                      {el.novelList}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
