import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
                <li
                  key={el.id}
                  className="eachCategory"
                  onClick={() =>
                    this.props.history.push(`/categories/${el.id}`)
                  }
                >
                  {el.smallCategory}
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
                <li
                  key={el.id}
                  className="eachCategory"
                  onClick={() =>
                    this.props.history.push(`/categories/${el.id}`)
                  }
                >
                  {el.smallCategory}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Aside);
