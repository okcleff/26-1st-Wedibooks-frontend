/*eslint-disable */
import React, { Component } from 'react';
import SubCategoryList from './SubCategoryList/SubCategoryList';
import { MdDoubleArrow } from 'react-icons/md';
import './Category.scss';

export class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }
  componentDidMount() {
    fetch('./data/novelBookList.json')
      .then(res => res.json())
      .then(list => {
        this.setState({
          categoryList: list,
        });
      });
  }
  render() {
    const { categoryList } = this.state;
    return (
      <div className="novelContainer">
        <div>
          <div className="categoryName">
            <span>소설</span>
            <MdDoubleArrow className="arrow" />
          </div>
          <div>
            {categoryList.slice(0, 9).map(novelItem => {
              return (
                <SubCategoryList
                  key={novelItem.id}
                  categoryList={novelItem.novelList}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="categoryName">
            <span>컴퓨터/IT</span>
            <MdDoubleArrow className="arrow" />
          </div>
          <div className="computerMap">
            {categoryList.slice(9, 15).map(novelItem => {
              return (
                <SubCategoryList
                  key={novelItem.id}
                  categoryList={novelItem.novelList}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="categoryName">
            <span>판타지</span>
            <MdDoubleArrow className="arrow" />
          </div>
          <div className="computerMap">
            {categoryList.slice(15, 21).map(novelItem => {
              return (
                <SubCategoryList
                  key={novelItem.id}
                  categoryList={novelItem.novelList}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="categoryName">
            <span>만화</span>
            <MdDoubleArrow className="arrow" />
          </div>
          <div className="computerMap">
            {categoryList.slice(-10).map(novelItem => {
              return (
                <SubCategoryList
                  key={novelItem.id}
                  categoryList={novelItem.novelList}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
