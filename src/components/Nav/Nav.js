import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Nav.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch('./data/CategoryList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data,
        });
      });
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <ul>
          {list.map(el => {
            return (
              <li
                key={el.id}
                onClick={() =>
                  this.props.history.push(`/categories/subcategories/${el.id}`)
                }
              >
                {el.subcategory}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(Nav);
