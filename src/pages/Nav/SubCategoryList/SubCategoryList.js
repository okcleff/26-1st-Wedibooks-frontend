/*eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SubCategoryList extends Component {
  render() {
    return (
      <ul className="novelWrap">
        <Link to="/footer">
          <li className="listName">{this.props.categoryList}</li>
        </Link>
      </ul>
    );
  }
}

export default SubCategoryList;
