import React from 'react';
import {cnHeader, IHeader} from "./index";
import './Header.scss';

const Header: React.FC<IHeader> = ({className, children}) => (
  <div className={cnHeader({}, [className])}>{children}</div>
);

export default Header;