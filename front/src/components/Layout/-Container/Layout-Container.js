import React from 'react';
import './Layout-Container.scss';

const LayoutContainer = (props) => (
  <div className="Layout-Container">{props.children}</div>
);

export default LayoutContainer;