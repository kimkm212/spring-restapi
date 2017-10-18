import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import axios from 'axios'
import ListObject from "./ListObject";

const propTypes = {};

const defaultProps = {};

class list extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page : 1
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/board/list/${this.state.page}`)
        .then((res) => {
          this.setState({
            listData : res.data
          });
        });
  }

  _renderList () {
    console.log(this.state.listData);
    return this.state.listData.content.map( content => {
      return (
          <tr>
            <td>{content.boardId}</td>
            <td>{content.boardNm}</td>
            <td>erase</td>
            <td><i aria-hidden="true" className="erase icon"></i></td>
          </tr>
      )
    });
  }


  render() {
    const listData = this.state.listData;
    return (
        <table className="ui red table">
          <colgroup>
            <col style={{width : "15%"}}/>
            <col style={{width : "auto"}}/>
            <col style={{width : "10%"}}/>
            <col style={{width : "10%"}}/>
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
            {listData? this._renderList() : null}
          </tbody>
          <tfoot>
          <tr>
            <th colSpan="3">
              <button className="ui blue basic button" role="button"><Link to="/admin/board/form">등록</Link></button>
              <div className="ui pagination right floated menu">
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
              </div>
            </th>
          </tr>
          </tfoot>
        </table>
    )
  };
}

list.propTypes = propTypes;
list.defaultProps = defaultProps;

export default list;