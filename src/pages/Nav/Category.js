import React, { Component } from 'react';
import './Category.scss';

export class Category extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <aside>
        <section className="novelList"></section>
        <section className="itList"></section>
      </aside>
    );
  }
}

export default Category;
