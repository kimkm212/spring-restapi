import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ListObject = ({idx, boardNm}) => {
  return (
      <tr>
        <td>{idx}</td>
        <td>{boardNm}</td>
      </tr>
  );
};

ListObject.propTypes = {};

ListObject.defaultProps = {};

export default ListObject;