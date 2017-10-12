import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from './List'
import Form from './Form'
const propTypes = {};

const defaultProps = {};

class BoardManage extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
        <div>
          <Route exact path="/admin/board" component={List}/>
          <Route exact path="/admin/board/list" component={List}/>
          <Route exact path="/admin/board/form" component={Form}/>
        </div>
    )
  };
}

BoardManage.propTypes = propTypes;
BoardManage.defaultProps = defaultProps;

export default BoardManage;