import React from 'react';
import {cnHeaderLogo, IHeaderLogo} from "./index";
import './Header-Logo.scss';

const HeaderLogo: React.FC<IHeaderLogo> = ({className, children}) => (
  <div className={cnHeaderLogo({}, [className])}>{children}</div>
);

export default HeaderLogo;