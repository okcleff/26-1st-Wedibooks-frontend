/*eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SubCategoryList extends Component {
  render() {
    const { categoryList } = this.props;
    return (
      <ul className="novelWrap">
        <Link to="/footer">
          <li className="listName">{categoryList}</li>
        </Link>
      </ul>
    );
  }
}

export default SubCategoryList;
