import React from 'react';
import './GitLogRow-Item.scss';

const GitLogRowItem = (props) => (
  <div className="GitLogRow-Item">{props.children}</div>
);

export default GitLogRowItem;