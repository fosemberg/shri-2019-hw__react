import React from 'react';
import './History.scss';
import { cnHistory, IHistory } from './index';

const History: React.FC<IHistory> = ({ className, children }) => (
  <div className={cnHistory({}, [className])}>{children}</div>
);

export default History;
