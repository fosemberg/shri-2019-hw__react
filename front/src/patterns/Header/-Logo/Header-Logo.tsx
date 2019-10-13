import React from 'react';
import {cn} from "@bem-react/classname";
import './Header-Logo.scss';
import {IClassNameProps} from "@bem-react/core";

export const cnHeaderLogo = cn('Header-Logo');

const HeaderLogo: React.FC<IClassNameProps> = ({className, children}) => (
  <div className={cnHeaderLogo({}, [className])}>{children}</div>
);

export default HeaderLogo;