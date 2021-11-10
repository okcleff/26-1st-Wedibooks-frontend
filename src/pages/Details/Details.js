import React, { Component } from 'react';

export class Details extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data,
        });
      });
  }

  render() {
    const { list } = this.state;
    return list.id ? (
      <div className="bestsellerWrap">
        <img
          src={`https://robohash.org/${list.id}?set=set2&size=180x180`}
          alt=""
        />
      </div>
    ) : null;
  }
}

export default Details;
