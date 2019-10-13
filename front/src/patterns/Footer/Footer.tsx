import React from 'react';
import {cnFooter, IFooter} from "./index";
import './Footer.scss';

const Footer: React.FC<IFooter> = ({className, children}) => (
  <div className={cnFooter({}, [className])}>{children}</div>
);

export default Footer;