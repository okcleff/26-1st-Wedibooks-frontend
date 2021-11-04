import React, { Component } from 'react';
import './Categories.scss';
import Aside from './Aside/Aside';

export class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <Aside />
      </div>
    );
  }
}

export default Categories;
