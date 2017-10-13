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
      page : 1,
      listData : null
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/board/list/${this.state.page}`)
        .then((res) => {
          console.log(res.data);
          this.setState({
            listData : res.data
          });
          console.log(this.state);
        });
  }

  render() {
    return (
        <table className="ui red table">
          <thead>
          <tr>
            <th>No</th>
            <th>게시판 이름</th>
          </tr>
          </thead>
          <tbody>
            {this.state.listData.content.map((obj) => {
              <ListObject id={obj.boardId} boardNm={obj.boardNm}/>
            })}
            <tr>
              <td>Apples</td>
              <td>200</td>
            </tr>
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