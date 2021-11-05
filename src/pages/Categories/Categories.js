import React, { Component } from 'react';
import Aside from './Aside/Aside';
import CategoryBestseller from './CategoryBest/CategoryBestseller';
import { BsBookHalf } from 'react-icons/bs';
import './Categories.scss';

export class Categories extends Component {
  constructor() {
    super();
    this.state = {
      bestsellerList: [],
      url: './data/BestsellerListAll.json',
    };
  }

  componentDidMount() {
    const { url } = this.state;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          bestsellerList: data,
        });
      });
  }

  changeUrl() {
    this.setState({
      url: './data/BestsellerListKorea.json',
    });
  }

  render() {
    const { bestsellerList } = this.state;
    const { changeUrl } = this;

    return (
      <div className="categories">
        <Aside changeUrl={changeUrl} />
        <section>
          <h1 className="categoryName">
            <span className="bookIcon">
              <BsBookHalf color="#f9b418" />
            </span>
            소설
          </h1>
          <div className="bestsellerTitle">베스트셀러</div>
          <div className="bestsellerWrap">
            {bestsellerList.map(el => {
              return <CategoryBestseller key={el.id} bestsellerList={el} />;
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Categories;
