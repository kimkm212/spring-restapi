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
    this._del = this._del.bind(this);
    this.state = {
      page : 1
    }
  }

  componentDidMount() {
    this._getListData();
  }

  _getListData() {
    axios.get(`http://localhost:8080/api/board/list/${this.state.page}`)
        .then((res) => {
          this.setState({
            listData : res.data
          });
        });
  }

  _renderList() {
    return this.state.listData.content.map( (content,index) => {
      return <ListObject key={index} content={content} index={index} fnDel={this._del}/>
    });
  }

  _del(content) {
    if(confirm(`'${content.boardNm}' 게시판을 삭제합니다`)){
      axios.delete(`http://localhost:8080/api/board/${content.boardId}`)
          .then(res => {
            this._getListData()
          });
    }
  }


  render() {
    const listData = this.state.listData;
    return (
        <table className="ui red table">
          <colgroup>
            <col style={{width : "15%"}}/>
            <col style={{width : "auto"}}/>
            <col style={{width : "7%"}}/>
            <col style={{width : "7%"}}/>
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
              </div>*/}
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