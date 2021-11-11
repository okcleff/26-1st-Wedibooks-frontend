import React, { Component } from 'react';
import SubcategoryBest from './SubcategoryBest/SubcategoryBest';
import { BsBookHalf } from 'react-icons/bs';
import './Categories.scss';

export class Categories extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      id: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/data/subBestseller${id}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data,
          id,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    fetch(`/data/subBestseller${id}.json`)
      .then(res => res.json())
      .then(data => {
        if (id !== prevProps.match.params.id) {
          this.setState({
            list: data,
            id,
          });
        }
      });
  }

  render() {
    const { list, id } = this.state;

    return (
      <div className="categories">
        <h1 className="categoryName">
          <span className="bookIcon">
            <BsBookHalf color="#f9b418" />
          </span>
          {id < 9 ? '소설' : '컴퓨터/IT'}
        </h1>
        <div className="bestsellerTitle">베스트셀러</div>
        <div className="bestsellerWrap">
          {list.map(el => {
            return <SubcategoryBest key={el.id} list={el} />;
          })}
        </div>
      </div>
    );
  }
}

export default Categories;
