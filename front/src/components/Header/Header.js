import React from 'react';
import './Header.scss';

const Header = (props) => (
  <div className="Header">{props.children}</div>
);

export default Header;