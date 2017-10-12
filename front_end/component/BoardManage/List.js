import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const propTypes = {};

const defaultProps = {};

class list extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <table className="ui red table">
          <thead>
          <tr>
            <th>No</th>
            <th>게시판 이름</th>
            <th>Protein</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Apples</td>
            <td>200</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>310</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>310</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>310</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>310</td>
            <td>0g</td>
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