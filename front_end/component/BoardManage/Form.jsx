import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import prpts from 'App-propts';

const propTypes = {};

const defaultProps = {};

class Form extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this._getBoardData = this._getBoardData.bind(this);
    this._getBoardData();
    this.state = {};
  }

  _getBoardData() {
    if (this.id) {
      axios.get(`${prpts.API_URL}/api/board/${this.id}`)
        .then((res) => {
          console.log(res.data);
          this.setState({
            boardId: res.data.boardId,
            boardNm: res.data.boardNm,
          });
        });
    }
  }

  _onChangeHandle(e) {
    this.setState({
      boardNm: e.target.value,
    });
  }

  _action() {
    if (!this.state.boardNm) {
      alert('게시판 이름 입력해주세요');
      return;
    }

    if (this.id) {
      this._updateAction();
    } else {
      this._saveAction();
    }
  }

  _saveAction() {
    axios.post(
      `${prpts.API_URL}/api/board`,
      {
        boardNm: this.state.boardNm,
      },
    ).then((res) => {
      alert(`${res.data.boardNm} 생성완료`);
      this.props.history.push('/admin/board/list');
    });
  }

  _updateAction() {
    axios.put(
      `${prpts.API_URL}/api/board`,
      {
        boardId: this.state.boardId,
        boardNm: this.state.boardNm,
      },
    ).then((res) => {
      alert(`${res.data.boardNm} 수정완료`);
      this.props.history.push('/admin/board/list');
    });
  }


  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label>게시판이름</label>
          <input type="text" name="first-name" placeholder="게시판이름" onChange={this._onChangeHandle.bind(this)} value={this.state.boardNm} />
        </div>

        <button className="ui button" type="button" onClick={this._action.bind(this)}>생성</button>
        <Link to="/admin/board/list"><button className="ui button" type="button" >취소</button></Link>
      </div>
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
