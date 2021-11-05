import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

export class Aside extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch('./data/CategoryList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryList: data,
        });
      });
  }

  render() {
    const { categoryList } = this.state;

    return (
      <div className="aside">
        <div className="bigCategory">
          <h1 className="bigCategoryName">소설</h1>
          <ul className="smallCategory">
            {categoryList.slice(0, 9).map(el => {
              return (
                <li key={el.id} className="eachCategory">
                  <Link to="/categories" className="categoryLink">
                    {el.smallCategory}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bigCategory">
          <h1 className="bigCategoryName">컴퓨터/IT</h1>
          <ul className="smallCategory">
            {categoryList.slice(9, categoryList.length).map(el => {
              return (
                <li key={el.id} className="eachCategory">
                  <Link to="/categories" className="categoryLink">
                    {el.smallCategory}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Aside;
