import React from 'react';
import {cn} from "@bem-react/classname";
import './Footer.scss';

export const cnFooter = cn('Footer');

const Footer = ({className, children}) => (
  <div className={cnFooter({}, [className])}>{children}</div>
);

export default Footer;