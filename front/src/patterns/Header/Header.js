import React from 'react';
import {cn} from "@bem-react/classname";
import './Header.scss';

export const cnHeader = cn('Header');

const Header = ({className, children}) => (
  <div className={cnHeader({}, [className])}>{children}</div>
);

export default Header;