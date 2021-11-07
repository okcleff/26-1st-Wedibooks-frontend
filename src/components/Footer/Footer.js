/*eslint-disable */
import React, { Component } from 'react';
import './Footer.scss';
import '../../styles/variables.scss';

export class Footer extends Component {
  constructor() {
    super();
    this.state = {
      footerList: [],
    };
  }
  componentDidMount() {
    fetch('./data/FooterList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          footerList: data,
        });
      });
  }

  render() {
    return (
      <footer>
        <section>
          <div className="firstLine">
            <div className="callNotice">
              <span className="callCenter">고객센터</span>
              <span className="line">|</span>
              <span className="notice">공지사항</span>
            </div>
            <div className="footerList">
              {this.state.footerList.map(footerList => {
                return (
                  // <FooterList
                  //   key={footerList.id}
                  //   footerName={footerList.footerData}
                  // />
                  <div key={footerList.id}>{footerList.footerData}</div>
                );
              })}
            </div>
            <div className="information">
              <span className="wediInfo">위디(주) 사업자 정보</span>
              <span>© WEDI Corp.</span>
              <span>
                이용 약관 | 개인 정보 처리 방침 | 청소년 보호 정책 | 사업자 정보
                확인
              </span>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
export default Footer;
