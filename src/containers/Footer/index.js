import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-component'>
        <div className='footer-container'>
          <p className='footer-container__info'><b>SĐT:</b> 097734xxx</p>
          <p className='footer-container__info'><b>Địa chỉ:</b> 27/27 Đường Xịn Xò Con Bò P.24 Q.10</p>
          <p className='footer-container__info'><b>Email:</b> TamAndHung@gmail.com</p>
        </div>
      </div>
    )
  }
}
