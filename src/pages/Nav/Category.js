/*eslint-disable */

import React, { Component } from 'react';
import './Category.scss';
import { MdDoubleArrow } from 'react-icons/md';
import SubCategoryList from './SubCategoryList/SubCategoryList';

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
    return (
      <div className="novelContainer">
        <div className="aa">
          <div className="categoryName">
            <span>소설</span>
            <MdDoubleArrow className="arrow" />
          </div>
          <div className="kk">
            {this.state.categoryList.map(novelItem => {
              return (
                <SubCategoryList
                  key={novelItem.id}
                  categoryList={novelItem.novelList}
                />
              );
            })}
          </div>
        </div>

        <div className="bb">
          <div className="categoryName">
            <span>컴퓨터/IT</span>
            <MdDoubleArrow className="arrow" />
          </div>
          {this.state.categoryList.map(novelItem => {
            return (
              <SubCategoryList
                key={novelItem.id}
                categoryList={novelItem.novelList}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Category;
