import React from 'react';
import './History-Link.scss';
import { cnHistoryLink, IHistoryLink } from './index';

const HistoryLink: React.FC<IHistoryLink> = ({ className, children }) => (
  <div className={cnHistoryLink({}, [className])}>{children}</div>
);

export default HistoryLink;
