import React from 'react';
import {cnLink, ILink} from "./index";
import './Link.scss';

const Link: React.FC<ILink> = ({className, children, href = '#'}) => (
  <a href={href} className={cnLink({}, [className])}>{children}</a>
);

export default Link;