import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
const propTypes = {};

const defaultProps = {};

class Form extends Component {

  constructor(props) {
    super(props);
  }

  _goList() {

  }


  render() {
    return (
        <div className="ui form">
          <div className="field">
            <label>게시판이름</label>
            <input type="text" name="first-name" placeholder="게시판이름"/>
          </div>
 
          <button className="ui button" type="button">생성</button>
          <Link to="/admin/board/list"><button className="ui button" type="button" >취소</button></Link>
        </div>
    )
  };
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;