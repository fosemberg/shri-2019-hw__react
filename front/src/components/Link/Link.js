import React from 'react';
import {cn} from "@bem-react/classname";
import './Link.scss';

export const cnLink = cn('Link');

const Link = ({className, children}) => (
  <a className={cnLink({}, [className])}>{children}</a>
);

export default Link;