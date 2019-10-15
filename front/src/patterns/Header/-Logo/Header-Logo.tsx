import React from 'react';
import './Header-Logo.scss';
import { cnHeaderLogo, IHeaderLogo } from './index';

const HeaderLogo: React.FC<IHeaderLogo> = ({ className, children }) => (
  <div className={cnHeaderLogo({}, [className])}>{children}</div>
);

export default HeaderLogo;
