import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BoardData from './BoardData/BoardData';
import List from './List';
import Form from './Form';


class BoardManage extends Component {
  render() {
    return (
      <div>
        <Route exact path="/admin/board" component={List} />
        <Route exact path="/admin/board/list" component={List} />
        <Route exact path="/admin/board/form" component={Form} />
        <Route exact path="/admin/board/form/:id" component={Form} />

        <Route path="/admin/board/data/:boardId" component={BoardData} />
      </div>
    );
  }
}

BoardManage.propTypes = {};
BoardManage.defaultProps = {};

export default BoardManage;
