import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class EachBook extends Component {
  render() {
    const { imgSrc, date } = this.props;

    return (
      // <div className="bookNDesc">
      //   <Link to="/categories">
      //     <img className="eachBook" src={imgSrc} alt="child" />
      //     <p className="bookDesc">
      //       출간일 : <br /> {date}
      //     </p>
      //   </Link>
      // </div>
      <div className="wrap">
        <div className="hex">
          <div className="hex-inner">
            <div className="content">
              <p>HEX 1</p>
            </div>
          </div>
        </div>
        <div className="hex">
          <div className="hex-inner">
            <div className="content">
              <p>HEX 1</p>
            </div>
          </div>
        </div>
        <div className="hex">
          <div className="hex-inner">
            <div className="content">
              <p>HEX 1</p>
            </div>
          </div>
        </div>
        <div className="hex">
          <div className="hex-inner">
            <div className="content">
              <p>HEX 1</p>
            </div>
          </div>
        </div>
        <div className="hex">
          <div className="hex-inner">
            <div className="content">
              <p>HEX 1</p>
            </div>
          </div>
        </div>
        <div className="hex">
          <div className="hex-inner">
            <div className="content">
              <p>HEX 1</p>
            </div>
          </div>
        </div>
        <div className="hex">
          <div className="hex-inner">
            <div className="content">
              <p>HEX 1</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EachBook;
