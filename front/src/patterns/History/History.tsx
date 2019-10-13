import React from 'react';
import {cnHistory, IHistory} from "./index";
import './History.scss';

const History: React.FC<IHistory> = ({className, children}) => (
  <div className={cnHistory({}, [className])}>{children}</div>
);

export default History;