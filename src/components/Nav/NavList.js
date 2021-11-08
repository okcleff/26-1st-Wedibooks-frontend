import React, { Component } from 'react';

export class NavList extends Component {
  render() {
    return (
      <ul className="novelDropList">
        <li className="DropListName">{this.props.dropDownList}</li>
      </ul>
    );
  }
}

export default NavList;
