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
        <div>
          <div className="categoryName">
            <span>소설</span>
            <MdDoubleArrow className="arrow" />
          </div>
          <div>
            {this.state.categoryList.slice(0, -6).map(novelItem => {
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
            {this.state.categoryList.slice(9).map(novelItem => {
              return (
                <SubCategoryList
                  key={novelItem.key}
                  categoryList={novelItem.computerList}
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
