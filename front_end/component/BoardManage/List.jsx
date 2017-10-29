import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import prpts from 'App-propts';
import AlertModal from '../Module/AlertModal';

const propTypes = {};

const defaultProps = {};

class list extends Component {
  constructor(props) {
    super(props);
    this.del = this.del.bind(this);
    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    this.getListData();
  }

  getListData() {
    axios.get(`${prpts.API_URL}/api/board/list/${this.state.page}`)
      .then((res) => {
        this.setState({
          listData: res.data,
        });
      });
  }

  del(boardNm, boardId) {
    return () => {
      if (confirm(`'${boardNm}' 게시판을 삭제합니다`)) {
        axios.delete(`${prpts.API_URL}/api/board/${boardId}`)
          .then((res) => {
            this.getListData();
          });
      }
    };
  }

  renderList() {
    return this.state.listData.content.map((content, index) => (
      <tr key={content.boardId}>
        <td>{index + 1}</td>
        <td>
          <Link to={`/admin/board/data/${content.boardId}/list`}>{content.boardNm}</Link>
        </td>
        <td>
          <Link to={`/admin/board/form/${content.boardId}`}><i aria-hidden="true" className="settings icon" /></Link>
        </td>
        <td>
          <i aria-hidden="true" className="erase icon" onClick={this.del(content.boardNm, content.boardId)} />
        </td>
      </tr>
    ));
  }


  render() {
    const listData = this.state.listData;
    return (
      <table className="ui red table">
        <colgroup>
          <col style={{ width: '15%' }} />
          <col style={{ width: 'auto' }} />
          <col style={{ width: '7%' }} />
          <col style={{ width: '7%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>No</th>
            <th>게시판 이름</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {listData ? this.renderList() : null}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="4">
              <Link to="/admin/board/form"><button className="ui blue basic button" role="button">등록</button></Link>
              {/* <div className="ui pagination right floated menu">
                <a className="icon item">
                  <i aria-hidden="true" className="left chevron icon"></i>
                </a>
                <a className="item">1</a>
                <a className="item">2</a>
                <a className="item">3</a>
                <a className="item">4</a>
                <a className="icon item">
                  <i aria-hidden="true" className="right chevron icon"></i>
                </a>
              </div> */}
              <AlertModal open={false} cont="삭제합니다" />
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
}

list.propTypes = propTypes;
list.defaultProps = defaultProps;

export default list;
