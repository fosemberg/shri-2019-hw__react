import React from 'react';
import './BreadCrumbs-Item.scss';

const BreadCrumbsItem = (props) => (
  <div className="BreadCrumbs-Item">{props.children}</div>
);

export default BreadCrumbsItem;