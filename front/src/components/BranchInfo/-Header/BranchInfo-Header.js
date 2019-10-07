import React from 'react';
import './BranchInfo-Header.scss';

const BranchInfoHeader = (props) => (
  <div className="BranchInfo-Header">{props.children}</div>
);

export default BranchInfoHeader;