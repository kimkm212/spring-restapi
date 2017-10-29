import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderMenu = () => (
  <header className="left">
    <div className="profile">
      <div className="profile-img" />
      <p>김강민님 환영해엽</p>
    </div>
    <ul className="menu-list">
      <li><Link to="/admin/site">사이트관리</Link></li>
      <li><Link to="/admin/board">게시판관리</Link></li>
      <li><Link to="/admin/member">회원관리</Link></li>
      <li><Link to="/admin/content">콘텐츠관리</Link></li>
      <li><Link to="/admin/setting"><i aria-hidden="true" className="setting icon" />설정</Link></li>
    </ul>
  </header>
);

export default HeaderMenu;
