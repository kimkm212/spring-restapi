import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
            <Link to={`/admin/board/data/${content.boardId}/list`}>{content.boardNm}</Link>
          </td>
          <td>
            <Link to={`/admin/board/form/${content.boardId}`}><i aria-hidden="true" className="settings icon"/></Link>
          </td>
          <td>
            <i aria-hidden="true" className="erase icon" onClick={this._del.bind(this)}/>
          </td>
        </tr>
    );
  }
}

ListObject.propTypes = {};

ListObject.defaultProps = {};

export default ListObject;