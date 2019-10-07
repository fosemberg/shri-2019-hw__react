import React from 'react';
import './Table-Cell.scss';

const TableCell = (props) => (
  <div className="Table-Cell">{props.children}</div>
);

export default TableCell;