import React from 'react';
import {cn} from "@bem-react/classname";
import './Header-Logo.scss';

export const cnHeaderLogo = cn('Header-Logo');

const HeaderLogo = ({className, children}) => (
  <div className={cnHeaderLogo({}, [className])}>{children}</div>
);

export default HeaderLogo;