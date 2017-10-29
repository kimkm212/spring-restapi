import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import Form from './Form';

const propTypes = {};

const defaultProps = {};

class ContentManage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path="/admin/content/list" component={List} />
        <Route exact path="/admin/content/form" component={Form} />
        <Route exact path="/admin/content/form/:contentId" component={Form} />
      </div>
    );
  }
}

ContentManage.propTypes = propTypes;
ContentManage.defaultProps = defaultProps;

export default ContentManage;
