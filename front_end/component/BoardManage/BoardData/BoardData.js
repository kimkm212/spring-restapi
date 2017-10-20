import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import List from './List'
import Form from './Form'
const propTypes = {};

const defaultProps = {};

class BoardData extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Route exact path="/admin/board/data/:boardId/list" component={List}/>
          <Route exact path="/admin/board/data/:boardId/form" component={Form}/>
          <Route exact path="/admin/board/data/:boardId/form/:dataId" component={Form}/>
        </div>
    )
  };
}

BoardData.propTypes = propTypes;
BoardData.defaultProps = defaultProps;

export default BoardData;