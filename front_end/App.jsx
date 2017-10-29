import React from 'react';
import { Route } from 'react-router-dom';
import BoardManage from './component/BoardManage/BoardManage';
import SiteManage from './component/SiteMenuManage/SiteMenuManage';
import HeaderMenu from './component/HeaderMenu';
import './style/App.scss';


const App = () => (
  <div className="admin-main">
    <HeaderMenu />
    <div className="content-area">
      <div className="ui breadcrumb">
        <a className="section">Home</a>
        <i aria-hidden="true" className="right angle icon divider" />
        <a className="section">게시판관리</a>
        <i aria-hidden="true" className="right angle icon divider" />
        <div className="active section">게시판</div>
      </div>
      <h2 className="ui header">게시판 관리</h2>
      <div className="content-body">
        <Route path="/admin/board" component={BoardManage} />
        <Route path="/admin/site" component={SiteManage} />
      </div>
    </div>
  </div>
);

export default App;

