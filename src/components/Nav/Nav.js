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
      novelSmallCategory: 'novelHidden',
      computerSmallCategory: 'computerHidden',
      allListSmallCategory: 'allListHidden',
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

  novelDropDown = () => {
    if (this.state.novelSmallCategory === 'novelHidden') {
      this.setState({
        novelSmallCategory: 'novelOpen',
      });
    } else {
      this.setState({
        novelSmallCategory: 'novelHidden',
      });
    }
  };

  computerDropDown = () => {
    if (this.state.computerSmallCategory === 'computerHidden') {
      this.setState({
        computerSmallCategory: 'computerOpen',
      });
    } else {
      this.setState({
        computerSmallCategory: 'computerHidden',
      });
    }
  };
  allListDropDown = () => {
    if (this.state.allListSmallCategory === 'allListHidden') {
      this.setState({
        allListSmallCategory: 'allListOpen',
      });
    } else {
      this.setState({
        allListSmallCategory: 'allListHidden',
      });
    }
  };
  render() {
    const {
      novelSmallCategory,
      computerSmallCategory,
      allListSmallCategory,
      dropList,
    } = this.state;
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
          <HiViewList className="listIcon" onClick={this.allListDropDown} />

          <span className="novel" onClick={this.novelDropDown}>
            소설
          </span>

          <span className="computer" onClick={this.computerDropDown}>
            컴퓨터/IT
          </span>
        </section>

        <div className="navDropList">
          <div className="novelDropList">
            <section className={novelSmallCategory}>
              {dropList.slice(0, 9).map(novel => {
                return (
                  <NavList key={novel.id} dropDownList={novel.novelList} />
                );
              })}
            </section>
          </div>

          <div className="itDropList">
            <section className={computerSmallCategory}>
              {dropList.slice(9, 15).map(novel => {
                return (
                  <NavList key={novel.id} dropDownList={novel.novelList} />
                );
              })}
            </section>
          </div>

          <div className="allDropList">
            <section className={allListSmallCategory}>
              {dropList.slice(0, 15).map(novel => {
                return (
                  <NavList key={novel.id} dropDownList={novel.novelList} />
                );
              })}
            </section>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
