import React from 'react';
import './BreadCrumbs.scss';

const BreadCrumbs = (props) => (
  <div className="BreadCrumbs">{props.children}</div>
);

export default BreadCrumbs;