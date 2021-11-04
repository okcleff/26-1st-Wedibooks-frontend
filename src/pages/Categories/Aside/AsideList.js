import React, { Component } from 'react';

export class AsideList extends Component {
  render() {
    const { smallCategory } = this.props;

    return <li className="eachCategory">{smallCategory}</li>;
  }
}

export default AsideList;
