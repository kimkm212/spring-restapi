import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import axios from 'axios';
import Content from "./Content";
import Form from './Form';

import SubMenu from "../layout/subMenu/SubMenu";


class ContentWrap extends Component {

    constructor(props) {
        super(props);
    }

/*    componentDidMount(){
        axios.get('http://localhost:8080/content/list/1').then(t => {
            console.log(t.data);
        });
    }*/

    render() {
        return (
            <div>
                <Route path="/content" component={Content}/>
                <Route path="/form" component={Form}/>
            </div>
        )
    }
}

ContentWrap.propTypes = {
    content : PropTypes.object
};

ContentWrap.defaultProps = {};



//연결
export default ContentWrap;