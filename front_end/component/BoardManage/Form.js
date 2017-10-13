import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import axios from 'axios'

const propTypes = {};

const defaultProps = {};

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  _onChangeHandle(e) {
    this.setState({
      boardNm : e.target.value
    });
  }

  _action() {
    if(!this.state.boardNm){
      alert('게시판 이름 입력해주세요');
      return;
    }

    console.log(this.state.boardNm);
    axios.post('http://localhost:8080/api/board',
        {
          boardNm : this.state.boardNm,
          boardd : 'gg'
        }
    ).then((res) => {
      console.log(res);
    });

  }


  render() {
    return (
        <div className="ui form">
          <div className="field">
            <label>게시판이름</label>
            <input type="text" name="first-name" placeholder="게시판이름" onChange={this._onChangeHandle.bind(this)}/>
          </div>
 
          <button className="ui button" type="button" onClick={this._action.bind(this)}>생성</button>
          <Link to="/admin/board/list"><button className="ui button" type="button" >취소</button></Link>
        </div>
    )
  };
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;