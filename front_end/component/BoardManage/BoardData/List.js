import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import axios from 'axios';
import ListObject from './ListObject'

const propTypes = {};

const defaultProps = {};

class List extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.match.params.boardId);
    this.state = {
      page : 1,
      boardId : this.props.match.params.boardId
    }
  }

  componentDidMount() {
    this._getListData();
  }

  _getListData() {
    axios.get(`http://localhost:8080/api/boardData/${this.state.boardId}/list/${this.state.page}`)
        .then((res) => {
          this.setState({
            listData: res.data
          });
        });
  }

  _renderList() {
    return this.state.listData.content.map( (content,index) => {
      return <ListObject key={index} content={content} index={index} fnDel={this._del}/>
    });
  }

  render() {
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
            <th>제목</th>
            <th>등록일</th>
            <th>수정일</th>
          </tr>
          </thead>
          <tbody>
          {this.state.listData? this._renderList() : null}
          </tbody>
          <tfoot>
          <tr>
            <th colSpan="4">
              <Link to="./form"><button className="ui blue basic button" role="button">등록</button></Link>
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

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;