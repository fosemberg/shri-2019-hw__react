import React from 'react';
import {cn} from "@bem-react/classname";
import './Header.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnHeader = cn('Header');

const Header: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnHeader({}, [className])}>{children}</div>
);

export default Header;