import React from 'react';
import {Link} from 'react-router-dom'

import './style/reset.scss'
import './style/App.scss'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="admin-main">
                <header className="left">
                    <div className="profile">
                        <div className="profile-img"></div>
                        <p>김강민님 환영해엽</p>
                    </div>
                    <ul className="menu-list">
                        <li><Link to="/admin/board">게시판관리</Link></li>
                        <li><Link to="/admin/member">회원관리</Link></li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>0</li>
                    </ul>
                </header>
                <div className="content-area">
                    바디
                </div>
            </div>
        );
    }
}

export default App;

