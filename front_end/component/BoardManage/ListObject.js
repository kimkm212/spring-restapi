import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ListObject = ({content}) => {
  return (
      <tr>
        <td>{content.boardId}</td>
        <td>{content.boardNm}</td>
      </tr>
  );
};

ListObject.propTypes = {};

ListObject.defaultProps = {};

export default ListObject;