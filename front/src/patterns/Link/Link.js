import React from 'react';
import {cn} from "@bem-react/classname";
import './Link.scss';

export const cnLink = cn('Link');

const Link = ({className, children, href = '#'}) => (
  <a href={href} className={cnLink({}, [className])}>{children}</a>
);

export default Link;