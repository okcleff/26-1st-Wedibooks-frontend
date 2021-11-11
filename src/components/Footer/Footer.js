/*eslint-disable */
import React, { Component } from 'react';
import { FOOTER_DATA } from './FooterData';
import './Footer.scss';

export class Footer extends Component {
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
              {FOOTER_DATA.map(footerList => {
                return <div key={footerList.id}>{footerList.footerData}</div>;
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
