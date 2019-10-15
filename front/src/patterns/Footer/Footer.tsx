import React from 'react';
import './Footer.scss';
import { cnFooter, IFooter } from './index';

const Footer: React.FC<IFooter> = ({ className, children }) => (
  <div className={cnFooter({}, [className])}>{children}</div>
);

export default Footer;
