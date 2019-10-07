import React from 'react';
import './Footer-Item.scss';

const FooterItem = (props) => (
  <div className="Footer-Item">{props.children}</div>
);

export default FooterItem;