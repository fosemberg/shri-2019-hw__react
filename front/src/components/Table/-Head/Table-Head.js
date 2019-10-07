import React from 'react';
import './Table-Head.scss';

const TableHead = (props) => (
  <div className="Table-Head">{props.children}</div>
);

export default TableHead;