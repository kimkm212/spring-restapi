import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import dateformat from 'dateformat'

class ListObject extends Component {

  _del() {
    this.props.fnDel(this.props.content);
  }


  render() {
    const {content, index} = this.props;
    return (
        <tr>
          <td>{index + 1}</td>
          <td>
            {content.subject}
          </td>
          <td>
            {dateformat(new Date(content.regDate), 'yyyy-mm-dd')}
          </td>
          <td>
            {content.udtDate}
          </td>
        </tr>
    );
  }
}

ListObject.propTypes = {};

ListObject.defaultProps = {};

export default ListObject;