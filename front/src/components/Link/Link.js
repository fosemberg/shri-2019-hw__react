import React from 'react';
import {cn} from "@bem-react/classname";
import './Link.scss';

export const cnLink = cn('Link');

const Link = ({className, children}) => (
  <div className={cnLink({}, [className])}>{children}</div>
);

export default Link;