import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from 'App-config';

const propTypes = {};

const defaultProps = {};

class Form extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this._getBoardData = this._getBoardData.bind(this);
    this._getBoardData();
    this.state = {
      boardId: this.props.match.params.boardId,
    };
  }

  _getBoardData() {
    if (this.id) {
      axios.get(`http://localhost:8080/api/boardData/${this.id}`)
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
    switch (e.target.name) {
      case 'subject':
        this.setState({
          subject: e.target.value,
        });
        break;
      case 'content':
        this.setState({
          content: e.target.value,
        });
    }
    console.log(this.state);
  }

  _action() {
    if (!this.state.subject) {
      alert('제목을 입력해주세요');
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
      `${API_URL}/api/boardData/${this.state.boardId}`,
      this.state,
    ).then((res) => {
      alert(`${res.data.subject} 게시물 등록되었습니다`);
      this.props.history.push(`/admin/board/data/${this.state.boardId}/list`);
    });
  }

  _updateAction() {
    axios.put(
      `${API_URL}/api/boardData/${this.state.boardId}`,
      this.state,
    ).then((res) => {
      alert(`${res.data.boardNm} 수정완료`);
      this.props.history.push('/admin/board/list');
    });
  }


  render() {
    return (
      <div className="ui form">
        <div className="field">
          <label>제목</label>
          <input type="text" name="subject" placeholder="제목" onChange={this._onChangeHandle.bind(this)} value={this.state.subject} />
        </div>
        <div className="field">
          <label>내용</label>
          <textarea type="text" name="content" placeholder="내용" onChange={this._onChangeHandle.bind(this)} value={this.state.content} />
        </div>
        <button className="ui button" type="button" onClick={this._action}>등록</button>
        <Link to={`/admin/board/data/${this.state.boardId}/list`}><button className="ui button" type="button" >취소</button></Link>
      </div>
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
