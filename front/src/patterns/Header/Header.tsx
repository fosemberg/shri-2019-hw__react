import React from 'react';
import './Header.scss';
import { cnHeader, IHeader } from './index';

const Header: React.FC<IHeader> = ({ className, children }) => (
  <div className={cnHeader({}, [className])}>{children}</div>
);

export default Header;
